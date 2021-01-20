import type { FC } from 'react'
import type { Post } from 'generated/sanity'

import { Stack, Box, Avatar, Divider, Badge } from '@chakra-ui/react'

type Props = {
  posts: Post[]
}

const PostsList: FC<Props> = ({ posts }) => {
  return (
    <Stack spacing={8} bgColor="gray.100" alignItems="center" py="6">
      {posts.map((post) => (
        <>
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bgColor="gray.300"
            as="a"
            href={`/blog/${post.slug}`}
          >
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  {post.author?.name}
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  {post.date}
                </Box>
              </Box>

              <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                {post.title}
              </Box>
              <Box mt="1" as="h6" lineHeight="tight" isTruncated>
                <Avatar size="2xs" name={post.author?.name || ''} src={post.author?.avatar?.asset?.url || ''} />
              </Box>
            </Box>
          </Box>
          <Divider />
        </>
      ))}
    </Stack>
  )
}

export default PostsList
