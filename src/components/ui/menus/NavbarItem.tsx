import type { FC } from 'react'

import { Text, useColorModeValue } from '@chakra-ui/react'

import NavLink from '@components/NavLink'

type Props = {
  to: string
  isLast?: boolean
}

const MenuItem: FC<Props> = ({ to = '/', isLast, children, ...props }) => {
  const color = useColorModeValue('white', 'stone.800')

  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      color={color}
      {...props}
    >
      <NavLink to={to}>{children}</NavLink>
    </Text>
  )
}

export default MenuItem
