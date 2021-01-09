import type { FC } from 'react'

import { ChakraProvider as DefaultChakraProvider } from '@chakra-ui/react'

import theme from '@styles/theme'

const ChakraProvider: FC = ({ children }) => {
  return <DefaultChakraProvider theme={theme}>{children}</DefaultChakraProvider>
}

export default ChakraProvider
