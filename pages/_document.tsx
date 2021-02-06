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
          <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
          <link href="/static/favicons/site.webmanifest" rel="manifest" />
          <link href="/static/favicons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
          <link href="/static/favicons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
          <link href="/static/favicons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
          <link color="#c7e3eb" href="/static/favicons/safari-pinned-tab.svg" rel="mask-icon" />
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
