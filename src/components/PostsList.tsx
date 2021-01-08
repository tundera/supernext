import type { FC } from 'react'
import { Box, Heading, List, ListItem, ListIcon } from '@chakra-ui/react'
import { MdBookmark } from 'react-icons/md'
import { BlogPost } from 'src/types/blog'
import NextLink from 'next/link'

type Props = {
  title: string
  posts: BlogPost[]
}

const PostsList: FC<Props> = ({ title, posts }) => {
  return (
    <Box bg="purple.100" p={2} borderRadius={8} alignItems="center" justifyContent="center">
      <Heading p={2} my={1}>
        {title}
      </Heading>
      <List spacing={3}>
        {posts.map((post) => (
          <ListItem key={post.slug}>
            <ListIcon as={MdBookmark} />
            <NextLink href={`/blog/${post.slug}`}>{post.frontMatter.title}</NextLink>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default PostsList
