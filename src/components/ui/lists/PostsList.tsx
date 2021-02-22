import type { FC } from 'react'
import type { PostData } from 'content/types'

import { Box, Text, Heading, List, ListItem, ListIcon } from '@chakra-ui/react'
import { MdBookmark } from 'react-icons/md'
import NextLink from 'next/link'

interface Props {
  title: string
  posts?: PostData[]
}

const PostsList: FC<Props> = ({ title, posts }) => {
  return (
    <Box bg="purple.100" p={2} borderRadius={8} alignItems="center" justifyContent="center">
      <Heading p={2} my={1}>
        {title}
      </Heading>
      {posts ? (
        <List spacing={3}>
          {posts.map((post) => (
            <ListItem key={post.slug}>
              <ListIcon as={MdBookmark} />
              <NextLink href={`/blog/${post.slug}`}>{post.title}</NextLink>
            </ListItem>
          ))}
        </List>
      ) : (
        <Text textAlign="center">No recent posts.</Text>
      )}
    </Box>
  )
}

export default PostsList
