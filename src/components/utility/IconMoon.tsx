import type { FC } from 'react'

import iconSet from 'selection.json'
import IcomoonReact from 'icomoon-react'

const Icon: FC<{
  color?: string
  size: string | number
  icon: string
  className?: string
}> = (props) => {
  const { color, size = '100%', icon, className = '' } = props
  return <IcomoonReact className={className} iconSet={iconSet} color={color} size={size} icon={icon} />
}

export default Icon
