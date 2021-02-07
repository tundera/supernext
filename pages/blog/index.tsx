import type { InferGetStaticPropsType } from 'next'

import { Stack, Heading, Text } from '@chakra-ui/react'

import PageLayout from '@components/layouts/PageLayout'
import { POSTS_PER_PAGE } from 'src/utils/constants'
import PostsList from '@components/ui/lists/PostsList'
import { usePreviewSubscription } from '@lib/sanity'
import { PostsQuery } from 'services/sanity/posts'
import sanity from '@lib/sanity/client'
import { getPosts } from '@lib/content/posts'
import Pagination from '@components/utility/Pagination'

export const getStaticProps = async ({ preview = false }) => {
  sanity.setPreviewMode(preview)

  const posts = await getPosts()

  return {
    props: {
      posts,
      preview,
    },
    revalidate: 1,
  }
}

const PostsPage = ({ posts, preview }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data } = usePreviewSubscription(PostsQuery, {
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
        <Pagination />
      </PageLayout>
    </>
  )
}

export default PostsPage
