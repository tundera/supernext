import type { FC } from 'react'

import { Flex, useColorMode } from '@chakra-ui/react'

const Container: FC = ({ children }) => {
  const { colorMode } = useColorMode()

  const bgColor = {
    light: 'white',
    dark: 'gray.900',
  }
  const primaryTextColor = {
    light: 'black',
    dark: 'white',
  }

  return (
    <Flex
      as="main"
      justifyContent="center"
      flexDirection="column"
      bg={bgColor[colorMode]}
      color={primaryTextColor[colorMode]}
      px={8}
    >
      {children}
    </Flex>
  )
}

export default Container
