import type { User, Session } from '@supabase/supabase-js'

import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { getUserData } from '@lib/supabase/users'
import { supabase } from '@lib/supabase'

type AuthView = 'sign_in' | 'sign_up' | 'forgotten_password' | 'magic_link'

export function useSupabaseAuth(session: Session, route: string = '/api/getUser') {
  const query = useQuery<User, Error>('Session', () => getUserData(route, session.access_token))
  const [view, setView] = useState<AuthView>('sign_in')

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY') setView('forgotten_password')
      if (event === 'USER_UPDATED') setTimeout(() => setView('sign_in'), 1000)

      fetch(route, {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        credentials: 'same-origin',
        body: JSON.stringify({ event, session }),
      }).then((res) => res.json())
    })

    return () => {
      listener.unsubscribe()
    }
  }, [route])

  return { view, query }
}
