import type { FC } from 'react'

import { Flex, Box, Container } from '@chakra-ui/react'

const BlogPostLayout: FC = ({ children }) => {
  return (
    <Flex bg="gray.500" minHeight="100vh" justifyContent="center" mx="150px" py={8}>
      <Container maxW="4xl" centerContent>
        <Box padding="4" bg="gray.100">
          {children}
        </Box>
      </Container>
    </Flex>
  )
}

export default BlogPostLayout
