import type { FC } from 'react'

import { Flex, useColorMode, useColorModeValue, useTheme } from '@chakra-ui/react'

const Container: FC = ({ children }) => {
  const theme = useTheme()
  const { colorMode } = useColorMode()
  const bg = useColorModeValue('stone.500', 'gold.500')
  const color = useColorModeValue('gold.500', 'stone.500')

  return (
    <Flex
      as="main"
      justify="center"
      flexDirection="column"
      bg={bg}
      color={color}
      px={8}
      maxW={theme.sizes.width}
      minHeight="95vh"
    >
      {children}
    </Flex>
  )
}

export default Container
