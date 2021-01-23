import type { FC } from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import { Global } from '@emotion/react'

import theme from 'src/styles/theme'
import fonts from 'src/styles/font-face'

const Fonts: FC = () => {
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
