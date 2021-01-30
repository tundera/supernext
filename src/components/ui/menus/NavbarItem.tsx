import type { FC } from 'react'

import { Text, useColorModeValue } from '@chakra-ui/react'

import NavLink from '@components/NavLink'

type Props = {
  to: string
  isLast?: boolean
}

const MenuItem: FC<Props> = ({ to = '/', isLast, children, ...props }) => {
  const color = useColorModeValue('stone.700', 'whiteAlpha.900')

  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 2 }}
      display="block"
      color={color}
      {...props}
    >
      <NavLink to={to}>{children}</NavLink>
    </Text>
  )
}

export default MenuItem
