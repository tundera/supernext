import type { AppProps /* , AppContext */ } from 'next/app'

import ReactQueryProvider from '@providers/ReactQueryProvider'
import ThemeProvider from '@providers/ThemeProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider state={pageProps.dehydratedState}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ReactQueryProvider>
  )
}

export default MyApp
