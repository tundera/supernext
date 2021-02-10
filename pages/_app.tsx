import type { CustomAppProps as AppProps } from 'types'
// import type { AppContext } from 'next/app'

import { Auth } from '@supabase/ui'
import { supabase } from '@lib/supabase'
import { QueryClient, QueryErrorResetBoundary } from 'react-query'
import { ErrorBoundary } from 'react-error-boundary'
import QueryProvider from '@providers/QueryProvider'
import FormProvider from '@providers/FormProvider'
import ThemeProvider from '@providers/ThemeProvider'
import RootErrorFallback from '@components/utility/RootErrorFallback'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps, router }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary FallbackComponent={RootErrorFallback} resetKeys={[router.asPath]} onReset={reset}>
          <FormProvider>
            <ThemeProvider>
              <QueryProvider client={queryClient} state={pageProps.dehydratedState}>
                <Auth.UserContextProvider supabaseClient={supabase}>
                  {getLayout(<Component {...pageProps} />)}
                </Auth.UserContextProvider>
              </QueryProvider>
            </ThemeProvider>
          </FormProvider>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}

export default MyApp
