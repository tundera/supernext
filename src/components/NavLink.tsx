import { useColorMode, Button } from '@chakra-ui/react'
import NextLink from 'next/link'

type Props = {
  text: string
  href: string
  LinkComponent: typeof NextLink
}

const NavLink = ({ LinkComponent, text, href }: Props) => {
  const { colorMode } = useColorMode()

  const color = { light: 'white', dark: 'black' }

  return (
    <LinkComponent href={href} passHref>
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
        {text}
      </Button>
    </LinkComponent>
  )
}

export default NavLink
