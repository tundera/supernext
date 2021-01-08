import type { FC, ReactElement } from 'react'

import { Button } from '@chakra-ui/react'

type Props = {
  colorScheme: string
  icon: ReactElement
}

const SocialButton: FC<Props> = ({ colorScheme, icon, children }) => {
  return (
    <Button colorScheme={colorScheme} leftIcon={icon}>
      {children}
    </Button>
  )
}

export default SocialButton
