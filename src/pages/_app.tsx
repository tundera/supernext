import type { AppProps /* , AppContext */ } from 'next/app'

import ReactQueryProvider from '@providers/ReactQueryProvider'
import ChakraProvider from '@providers/ChakraProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider state={pageProps.dehydratedState}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ReactQueryProvider>
  )
}

export default MyApp
