import type { FC } from 'react'

import { useColorMode, Button } from '@chakra-ui/react'
import NextLink from 'next/link'

type Props = {
  to: string
}

const NavLink: FC<Props> = ({ to, children }) => {
  const { colorMode } = useColorMode()

  const color = { light: 'white', dark: 'black' }

  return (
    <NextLink href={to} passHref>
      <Button
        fontWeight="500"
        fontSize={['xs', 'sm', 'md', 'md']}
        as="a"
        variant="ghost"
        _hover={{ bg: 'rgba(0,0,0,.2)' }}
        p={4}
        mx={2}
        color={color[colorMode]}
      >
        {children}
      </Button>
    </NextLink>
  )
}

export default NavLink
