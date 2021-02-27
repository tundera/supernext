import type { CustomAppProps } from 'types'
// import type { AppContext } from 'next/app'

import { QueryClient, useQueryErrorResetBoundary } from 'react-query'
import { ErrorBoundary } from 'react-error-boundary'
import { Provider as AuthProvider } from 'next-auth/client'

import QueryProvider from '@providers/QueryProvider'
import FormProvider from '@providers/FormProvider'
import ThemeProvider from '@providers/ThemeProvider'
import RootErrorFallback from '@components/utility/RootErrorFallback'

import '../styles/globals.css'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps, router }: CustomAppProps) {
  const { reset } = useQueryErrorResetBoundary()
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ErrorBoundary FallbackComponent={RootErrorFallback} resetKeys={[router.asPath]} onReset={reset}>
      <FormProvider>
        <ThemeProvider cookies={pageProps.cookies}>
          <QueryProvider client={queryClient} state={pageProps.dehydratedState}>
            <AuthProvider session={pageProps.session}>{getLayout(<Component {...pageProps} />)}</AuthProvider>
          </QueryProvider>
        </ThemeProvider>
      </FormProvider>
    </ErrorBoundary>
  )
}

export default MyApp

export { getServerSideProps } from '@providers/ThemeProvider'
