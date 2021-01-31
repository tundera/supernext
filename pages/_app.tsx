import type { AppProps /* , AppContext */ } from 'next/app'

import { QueryClient } from 'react-query'

import QueryProvider from '@providers/QueryProvider'
import FormProvider from '@providers/FormProvider'
import ThemeProvider from '@providers/ThemeProvider'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider client={queryClient} state={pageProps.dehydratedState}>
      <FormProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </FormProvider>
    </QueryProvider>
  )
}

export default MyApp
