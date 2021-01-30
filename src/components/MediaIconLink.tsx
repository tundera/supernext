import type { ReactElement } from 'react'

import { Link, IconButton, useColorModeValue } from '@chakra-ui/react'

type Props = {
  title: string
  icon: ReactElement
  href: string
}

const MediaIconLink = ({ icon, title, href }: Props) => {
  const hoverColor = useColorModeValue('stone.500', 'gold.500')
  const color = useColorModeValue('gold.700', 'stone.700')

  return (
    <Link href={href} title={title} isExternal mx={2}>
      <IconButton
        aria-label={`${title} icon link`}
        icon={icon}
        size="lg"
        color={color}
        _hover={{ bgBlendMode: 'difference', bgColor: 'gray.300', color: hoverColor }}
        variant="ghost"
      />
    </Link>
  )
}

export default MediaIconLink
