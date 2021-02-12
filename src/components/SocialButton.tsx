import type { FC, ReactElement } from 'react'

import { Button } from '@chakra-ui/react'

interface Props {
  scheme: string
  icon: ReactElement
}

const SocialButton: FC<Props> = ({ scheme, icon, children }) => {
  return (
    <Button colorScheme={scheme} leftIcon={icon}>
      {children}
    </Button>
  )
}

export default SocialButton
