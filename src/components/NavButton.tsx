import type { FC } from 'react'

import { Button } from '@chakra-ui/react'
import NextLink from 'next/link'

type Props = {
  to: string
}

const NavButton: FC<Props> = ({ to, children }) => {
  return (
    <NextLink href={to} passHref>
      <Button as="a" variant="ghost" w="100%">
        {children}
      </Button>
    </NextLink>
  )
}

export default NavButton
