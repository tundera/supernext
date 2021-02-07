import type { FC } from 'react'

import { paramCase } from 'change-case'
import { useColorModeValue, Wrap, WrapItem } from '@chakra-ui/react'

import TechBadge from '@components/ui/TechBadge'

type Technology = {
  name: string
  image: string
}

type Props = {
  technologies: Technology[]
}

const TechStackBadges: FC<Props> = ({ technologies }) => {
  const bg = useColorModeValue('brand.500', 'whiteAlpha.500')

  return (
    <Wrap>
      {technologies.map((item) => (
        <WrapItem bg={bg} key={item.name}>
          <TechBadge key={paramCase(item.name)} name={item.name} src={item.image} />
        </WrapItem>
      ))}
    </Wrap>
  )
}

export default TechStackBadges

export type { Props as TechStackBadgesProps }
