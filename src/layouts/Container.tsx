import type { FC } from 'react'

import { Flex, useColorMode } from '@chakra-ui/react'

const Container: FC = ({ children }) => {
  const { colorMode } = useColorMode()

  const color = {
    light: '#110d5b',
    dark: '#a3f6e7',
  }
  const bgColor = {
    light: 'gray.200',
    dark: 'gray.700',
  }

  return (
    <Flex
      as="main"
      justifyContent="center"
      flexDirection="column"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      px={8}
      minHeight="95vh"
    >
      {children}
    </Flex>
  )
}

export default Container
