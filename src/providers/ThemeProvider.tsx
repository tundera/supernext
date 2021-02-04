import type { FC } from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import { Global } from '@emotion/react'

import theme from 'styles/theme'

function Fonts() {
  return (
    <Global
      styles={`
        @font-face {
          font-family: 'Dank Mono';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(fonts/DankMono-Regular.otf) format('otf');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        @font-face {
          font-family: 'Inter';
          font-style: italic;
          font-weight: 400;
          font-display: swap;
          src: url(fonts/Inter.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(fonts/Inter.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
  `}
    />
  )
}

const ThemeProvider: FC = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      {children}
    </ChakraProvider>
  )
}

export default ThemeProvider
