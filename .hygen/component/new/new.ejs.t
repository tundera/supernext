---
to: src/components/<%=type%>/<%= [h.inflection.camelize(h.dirName(name)), h.camelizedBaseName(name)].filter(Boolean).join('/') %>/index.tsx
---
<% formattedPath = h.camelizedPathName(name) -%>
<% component = h.camelizedBaseName(name) -%>
import type { FC } from 'react'

// import NextLink from 'next/link'

import { useColorModeValue, chakra, Heading, Text, Box, Flex } from '@chakra-ui/react'

interface Props {
  title: string
}

const <%= component %>: FC<Props> = ({ title }) => {
  const bg = useColorModeValue('brand.500', 'whiteAlpha.900')
  const color = useColorModeValue('whiteAlpha.900', 'brand.500')

  return (
    <Box as="article" bg={bg} color={color}>
      <Heading as="h2">{title}</Heading>
      <Text>Add a description for your blog post here.</Text>
    </Box>
  )
}

export default <%= component %>

export type { Props as <%= component %>Props }