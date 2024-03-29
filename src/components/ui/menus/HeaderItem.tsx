import type { FC } from 'react'

import { Text, useColorModeValue } from '@chakra-ui/react'

import NavLink from '@components/NavLink'

interface Props {
  to: string
  isLast?: boolean
}

const HeaderItem: FC<Props> = ({ to = '/', isLast, children, ...props }) => {
  const color = useColorModeValue('brand.500', 'whiteAlpha.900')

  return (
    <Text
      mb={{ base: isLast ? 2 : 8, sm: 2 }}
      mr={{ base: 0, sm: isLast ? 0 : 2 }}
      display="block"
      color={color}
      {...props}
    >
      <NavLink to={to}>{children}</NavLink>
    </Text>
  )
}

export default HeaderItem
