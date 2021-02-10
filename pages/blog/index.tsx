import type { GetStaticProps } from 'next'
import type { NextPage } from 'types'
import type { Post } from 'services/sanity/generated/types'

import { Flex, Heading, Text } from '@chakra-ui/react'

import { getLayout } from '@components/layouts/SiteLayout'
import { POSTS_PER_PAGE } from 'src/utils/constants'
import PostsList from '@components/ui/lists/PostsList'
import { usePreviewSubscription } from '@lib/sanity'
import { PostsQuery } from 'services/sanity/posts'
import sanity from '@lib/sanity/client'
import { getPosts } from '@lib/content/posts'
import Pagination from '@components/utility/Pagination'
import PreviewBanner from '@components/sections/PreviewBanner'

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
      {process.env.NODE_ENV === 'development' && <PreviewBanner preview={preview} />}
      <Flex flexDir="column" alignItems="center">
        <Heading>This Site Loads MDX From Sanity.io</Heading>
        <Text>View any of these pages to see it in action:</Text>
        <PostsList posts={data} />
        <Pagination />
      </Flex>
    </>
  )
}

PostsPage.getLayout = getLayout

export default PostsPage
