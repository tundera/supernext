import type { FC } from 'react'
import type { PostData } from 'content/types'

import { Grid } from '@chakra-ui/react'
import BlogCardWithAuthor from '@components/ui/cards/BlogCardWithAuthor'

interface Props {
  posts?: PostData[]
}

const PostsList: FC<Props> = ({ posts }) => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, minmax(0, 1fr))',
        md: 'repeat(2, minmax(0, 1fr))',
        xl: 'repeat(3, minmax(0, 1fr))',
      }}
      gap="12"
    >
      {posts.map((post) => (
        <BlogCardWithAuthor key={post.slug} post={post} />
      ))}
    </Grid>
  )
}

export default PostsList
