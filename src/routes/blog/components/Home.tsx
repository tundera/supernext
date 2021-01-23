/* eslint-disable jsx-a11y/anchor-is-valid */

import { Stack, Heading, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import PageLayout from '@components/layouts/PageLayout'
import { POSTS_PER_PAGE } from 'constants/sanity'
import PostsList from '@components/ui/lists/PostsList'
import useBlogPosts from '@hooks/server/useBlogPosts'
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
