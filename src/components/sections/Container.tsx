import type { FC } from 'react'

import { Flex, useColorMode, useTheme } from '@chakra-ui/react'

const Container: FC = ({ children }) => {
  const theme = useTheme()
  const { colorMode } = useColorMode()

  const color = {
    light: theme.colors.brand.primary,
    dark: theme.colors.brand.secondary,
  }
  const bgColor = {
    light: '#FFFFFF',
    dark: '#212529',
  }

  return (
    <Flex
      as="main"
      justifyContent="center"
      flexDirection="column"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      px={8}
      maxW={theme.sizes.width}
      minHeight="95vh"
    >
      {children}
    </Flex>
  )
}

export default Container
