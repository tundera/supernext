import type { NextPage, GetStaticProps } from 'next'
import type { Post } from 'services/sanity/generated/types'

import { Flex, Heading, Text } from '@chakra-ui/react'

import PageLayout from '@components/layouts/PageLayout'
import { POSTS_PER_PAGE } from 'src/utils/constants'
import PostsList from '@components/ui/lists/PostsList'
import { usePreviewSubscription } from '@lib/sanity'
import { PostsQuery } from 'services/sanity/posts'
import sanity from '@lib/sanity/client'
import { getPosts } from '@lib/content/posts'
import Pagination from '@components/utility/Pagination'

type Props = {
  posts: Post[]
  preview: boolean
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
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

const PostsPage: NextPage<Props> = ({ posts, preview }) => {
  const { data } = usePreviewSubscription(PostsQuery, {
    params: { count: POSTS_PER_PAGE },
    initialData: posts,
    enabled: preview,
  })

  return (
    <>
      <PageLayout preview={preview}>
        <Flex flexDir="column" alignItems="center">
          <Heading>This Site Loads MDX From Sanity.io</Heading>
          <Text>View any of these pages to see it in action:</Text>
          <PostsList posts={data} />
          <Pagination />
        </Flex>
      </PageLayout>
    </>
  )
}

export default PostsPage
