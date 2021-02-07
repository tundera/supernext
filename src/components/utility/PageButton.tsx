import type { FC } from 'react'

import { chakra, useColorModeValue } from '@chakra-ui/react'

type Props = {
  p?: boolean
  disabled?: boolean
  active?: boolean
}

const PageButton: FC<Props> = ({ p, disabled, active, children }) => {
  const activeStyle = {
    bg: useColorModeValue('brand.600', 'brand.500'),
    color: useColorModeValue('white', 'gray.200'),
  }
  return (
    <chakra.a
      href="#"
      mx={1}
      px={4}
      py={2}
      borderRadius="md"
      bg={useColorModeValue('white', 'gray.800')}
      color={useColorModeValue('gray.700', 'gray.200')}
      opacity={disabled ? '0.6' : '1.0'}
      _hover={!disabled ? activeStyle : {}}
      cursor={disabled ? 'not-allowed' : ''}
      {...(active && activeStyle)}
      display={p && !active ? { base: 'none', sm: 'block' } : {}}
    >
      {children}
    </chakra.a>
  )
}

export default PageButton

export type { Props as PageButtonProps }
