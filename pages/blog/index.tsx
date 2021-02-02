import type { InferGetStaticPropsType } from 'next'

import { Stack, Heading, Text } from '@chakra-ui/react'

import PageLayout from '@components/layouts/PageLayout'
import { POSTS_PER_PAGE } from 'src/utils/constants'
import PostsList from '@components/ui/compound/PostsList'
import { usePreviewSubscription } from '@lib/sanity'
import { AllPostsQuery } from 'services/sanity/posts'
import sanity from '@lib/sanity/client'
import { getAllPosts } from '@lib/content/posts'

export const getStaticProps = async ({ preview = false }) => {
  sanity.setPreviewMode(preview)

  const posts = await getAllPosts()

  return {
    props: {
      posts,
      preview,
    },
    revalidate: 1,
  }
}

const Blog = ({ posts, preview }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data } = usePreviewSubscription(AllPostsQuery, {
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

export default Blog
