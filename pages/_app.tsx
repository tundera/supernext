import type { AppProps /* , AppContext */ } from 'next/app'

import { Auth } from '@supabase/ui'
import { supabase } from '@lib/supabase'
import { QueryClient, QueryErrorResetBoundary } from 'react-query'
import { ErrorBoundary } from 'react-error-boundary'

import QueryProvider from '@providers/QueryProvider'
import FormProvider from '@providers/FormProvider'
import ThemeProvider from '@providers/ThemeProvider'
import RootErrorFallback from '@components/utility/RootErrorFallback'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: false,
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary FallbackComponent={RootErrorFallback} onReset={reset}>
          <Auth.UserContextProvider supabaseClient={supabase}>
            <FormProvider>
              <ThemeProvider>
                <QueryProvider client={queryClient} state={pageProps.dehydratedState}>
                  <Component {...pageProps} />
                </QueryProvider>
              </ThemeProvider>
            </FormProvider>
          </Auth.UserContextProvider>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}

export default MyApp
