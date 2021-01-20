import type { FC } from 'react'

import { useColorMode, Button } from '@chakra-ui/react'
import NextLink from 'next/link'

type Props = {
  text: string
  href: string
  LinkComponent: typeof NextLink
}

const NavLink: FC<Props> = ({ LinkComponent, text, href }) => {
  const { colorMode } = useColorMode()

  const color = { light: 'white', dark: 'gray.800' }

  return (
    <LinkComponent href={href} passHref>
      <Button
        fontWeight="500"
        fontSize={['xs', 'sm', 'lg', 'xl']}
        as="a"
        variant="ghost"
        _hover={{ bg: 'rgba(0,0,0,.2)' }}
        p={[1, 4]}
        color={color[colorMode]}
      >
        {text}
      </Button>
    </LinkComponent>
  )
}

export default NavLink
