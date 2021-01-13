import type { FC } from 'react'

import { Button } from '@chakra-ui/react'
import NextLink from 'next/link'

type Props = {
  text: string
  href: string
  LinkComponent: typeof NextLink
}

const NavLink: FC<Props> = ({ LinkComponent, text, href }) => {
  return (
    <LinkComponent href={href} passHref>
      <Button
        fontWeight="500"
        fontSize={['xs', 'sm', 'lg', 'xl']}
        as="a"
        variant="ghost"
        _hover={{ bg: 'rgba(0,0,0,.2)' }}
        p={[1, 4]}
        color="white"
      >
        {text}
      </Button>
    </LinkComponent>
  )
}

export default NavLink
