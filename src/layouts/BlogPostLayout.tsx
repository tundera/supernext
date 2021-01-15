import type { FC } from 'react'

import { Flex, Container } from '@chakra-ui/react'

const BlogPostLayout: FC = ({ children }) => {
  return (
    <Flex bg="gray.200" minHeight="100vh" alignItems="center" justifyContent="center">
      <Container>{children}</Container>
    </Flex>
  )
}

export default BlogPostLayout
