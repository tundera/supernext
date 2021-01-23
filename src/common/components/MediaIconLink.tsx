import type { FC, ReactElement } from 'react'

import { Link, IconButton, useColorMode } from '@chakra-ui/react'

type Props = {
  title: string
  icon: ReactElement
  href: string
}

const MediaIconLink: FC<Props> = ({ icon, title, href }) => {
  const { colorMode } = useColorMode()

  return (
    <Link href={href} title={title} isExternal mx={2}>
      <IconButton
        aria-label={`${title} icon link`}
        icon={icon}
        size="lg"
        color={colorMode === 'dark' ? '#110d5b' : '#a3f6e7'}
        _hover={{ bgBlendMode: 'difference', bgColor: 'gray.300', color: colorMode === 'dark' ? '#a3f6e7' : '#110d5b' }}
        variant="ghost"
      />
    </Link>
  )
}

export default MediaIconLink
