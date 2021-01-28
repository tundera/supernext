import type { ReactElement } from 'react'

import { Link, IconButton, useColorModeValue, useTheme } from '@chakra-ui/react'

type Props = {
  title: string
  icon: ReactElement
  href: string
}

const MediaIconLink = ({ icon, title, href }: Props) => {
  const theme = useTheme()
  const hoverColor = useColorModeValue(theme.colors.brand.primary, theme.colors.brand.secondary)
  const color = useColorModeValue(theme.colors.brand.secondary, theme.colors.brand.primary)

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
