import type { FC } from 'react'
import type { Session } from 'next-auth/client'

import { signIn, signOut } from 'next-auth/client'
import { useColorModeValue, Button } from '@chakra-ui/react'

interface Props {
  session: Session
}

const AuthButton: FC<Props> = ({ session }) => {
  const color = useColorModeValue('whiteAlpha.900', 'brand.500')
  const scheme = useColorModeValue('brand', 'gray')

  return session ? (
    <Button onClick={() => signOut()} color={color} colorScheme={scheme} size="sm">
      Sign Out
    </Button>
  ) : (
    <Button onClick={() => signIn()} color={color} colorScheme={scheme} size="sm">
      Sign In
    </Button>
  )
}

export default AuthButton

export type { Props as AuthButtonProps }
