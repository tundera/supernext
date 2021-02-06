// import type { DocumentContext } from 'next/document'

import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

import theme from 'styles/theme'

export default class Document extends NextDocument {
  // static async getInitialProps(ctx: DocumentContext) {
  //   const initialProps = await Document.getInitialProps(ctx)

  //   return initialProps
  // }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            defer
            data-website-id="6453036e-7d4b-4ec5-a0b2-768110a25194"
            src="https://metrics.tundera.dev/umami.js"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
