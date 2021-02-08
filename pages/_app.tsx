import type { AppProps /* , AppContext */ } from 'next/app'

import { QueryClient, QueryErrorResetBoundary } from 'react-query'
import { ErrorBoundary } from 'react-error-boundary'

import QueryProvider from '@providers/QueryProvider'
import FormProvider from '@providers/FormProvider'
import ThemeProvider from '@providers/ThemeProvider'
import RootErrorFallback from '@components/utility/RootErrorFallback'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary FallbackComponent={RootErrorFallback} onReset={reset}>
          <QueryProvider client={queryClient} state={pageProps.dehydratedState}>
            <FormProvider>
              <ThemeProvider>
                <Component {...pageProps} />
              </ThemeProvider>
            </FormProvider>
          </QueryProvider>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}

export default MyApp
