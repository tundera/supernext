import type { AppProps /* , AppContext */ } from 'next/app'

import QueryProvider from '@providers/QueryProvider'
import ThemeProvider from '@providers/ThemeProvider'
import DataProvider from '@providers/DataProvider'

function MyApp({ Component, pageProps }: AppProps) {
  const { dehydratedState, children, ...rest } = pageProps
  return (
    <QueryProvider state={dehydratedState}>
      <ThemeProvider>
        <DataProvider {...rest}>
          <Component {...rest} />
        </DataProvider>
      </ThemeProvider>
    </QueryProvider>
  )
}

export default MyApp
