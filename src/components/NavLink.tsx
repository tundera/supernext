import type { FC } from 'react'

import { useColorModeValue, Button } from '@chakra-ui/react'
import NextLink from 'next/link'

interface Props {
  to: string
}

const NavLink: FC<Props> = ({ to, children }) => {
  const color = useColorModeValue('whiteAlpha.900', 'brand.500')
  const hoverColor = useColorModeValue('brand.500', 'whiteAlpha.900')
  const hoverBg = useColorModeValue('whiteAlpha.900', 'brand.300')

  return (
    <NextLink href={to} passHref>
      <Button
        color={color}
        size="sm"
        fontWeight="500"
        fontSize={['xs', 'sm', 'md', 'md']}
        as="a"
        variant="ghost"
        _hover={{ color: hoverColor, bg: hoverBg }}
        _active={{ color: hoverColor, bg: hoverBg }}
        p={4}
        mx={2}
      >
        {children}
      </Button>
    </NextLink>
  )
}

export default NavLink
