import { Avatar } from '@chakra-ui/react'

interface Props {
  name: string
  src: string
}

const TechBadge = ({ name, src }: Props) => {
  return <Avatar name={name} src={src} />
}

export default TechBadge

export type { Props as TechBadgeProps }
