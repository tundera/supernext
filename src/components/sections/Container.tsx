import type { FC } from 'react'

import { Flex, useColorModeValue, useTheme } from '@chakra-ui/react'

const Container: FC = ({ children }) => {
  const theme = useTheme()
  const bg = useColorModeValue('whiteAlpha.900', 'stone.700')
  const color = useColorModeValue('stone.700', 'whiteAlpha.900')

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
