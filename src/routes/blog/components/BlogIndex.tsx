import { Stack, Heading, Text } from '@chakra-ui/react'

import PageLayout from 'src/components/layouts/PageLayout'
import { POSTS_PER_PAGE } from 'src/constants'
import PostsList from 'src/components/ui/compound/PostsList'
import useBlogPosts from '@routes/blog/hooks/useBlogPosts'
import { usePreviewSubscription } from '@lib/sanity'
import { getPosts } from 'services/sanity/posts'

const BlogHome = () => {
  const { posts, preview } = useBlogPosts()

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

BlogHome.dataHooks = [useBlogPosts]

export default BlogHome
