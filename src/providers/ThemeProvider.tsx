import type { FC } from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import { Global } from '@emotion/react'

import theme from 'styles/theme'
import fonts from 'styles/font-face'

function Fonts() {
  return <Global styles={fonts} />
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
