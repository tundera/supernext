import type { FC } from 'react'

// import NextLink from 'next/link'

import { useColorModeValue, Heading, Text, Box } from '@chakra-ui/react'

interface Props {
  replies: any[]
}

const Replies: FC<Props> = ({ replies }) => {
  const bg = useColorModeValue('brand.500', 'whiteAlpha.900')
  const color = useColorModeValue('whiteAlpha.900', 'brand.500')

  return (
    <Box as="article" bg={bg} color={color}>
      <Heading as="h2">{replies}</Heading>
      <Text>Add a description for your blog post here.</Text>
    </Box>
  )
}

export default Replies

export type { Props as RepliesProps }
