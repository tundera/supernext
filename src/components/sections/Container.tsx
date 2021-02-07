import type { FC } from 'react'

import { Flex, useColorModeValue } from '@chakra-ui/react'

const Container: FC = ({ children }) => {
  const bg = useColorModeValue('whiteAlpha.900', 'brand.900')
  const color = useColorModeValue('brand.700', 'whiteAlpha.900')

  return (
    <Flex
      as="main"
      justify="center"
      flexDirection="column"
      bg={bg}
      color={color}
      w="100%"
      minW={[768, 1050, 1150]}
      minHeight="95vh"
    >
      {children}
    </Flex>
  )
}

export default Container
