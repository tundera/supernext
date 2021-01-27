import { Stack, Heading, Text } from '@chakra-ui/react'

import PageLayout from '@components/layouts/PageLayout'
import { POSTS_PER_PAGE } from 'src/constants'
import PostsList from '@components/ui/compound/PostsList'
import { useBlogPostsData } from '@hooks/data/useBlogPostsData'
import { usePreviewSubscription } from '@lib/sanity'
import { getPosts } from 'src/services/sanity/posts'

const BlogIndex = () => {
  const { posts, preview } = useBlogPostsData()

  const { data } = usePreviewSubscription(getPosts, {
    params: { count: POSTS_PER_PAGE },
    initialData: posts,
    enabled: preview,
  })

  return (
    <>
      <PageLayout preview={preview}>
        <Stack>
          <Heading>This Site Loads MDX From Sanity.io</Heading>
          <Text>View any of these pages to see it in action:</Text>
          <PostsList posts={data} />
        </Stack>
      </PageLayout>
    </>
  )
}

BlogIndex.dataHooks = [useBlogPostsData]

export default BlogIndex
