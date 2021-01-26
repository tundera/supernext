import type { FC } from 'react'

import { useBreakpointValue, chakra } from '@chakra-ui/react'
import NextImage from 'next/image'

type Props = {
  src: string
  width: string[]
  height: string[]
}

const Image = chakra(NextImage, {
  baseStyle: { maxH: 120, maxW: 120 },
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
})

const ResponsiveImage: FC<Props> = ({ src, width, height, ...props }) => {
  const imageWidth = useBreakpointValue(width)?.replace('px', '') || 0
  const imageHeight = useBreakpointValue(height)?.replace('px', '') || 0
  return <Image src={src} width={imageWidth} height={imageHeight} border="4px solid silver" {...props} />
}

export default ResponsiveImage
