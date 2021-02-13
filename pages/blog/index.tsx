import type { GetStaticProps } from 'next'
import type { CustomNextPage as NextPage } from 'types'
import type { Post } from 'services/sanity/generated/types'

import { Flex, Heading, Text } from '@chakra-ui/react'

import { Image, useQuerySubscription } from 'react-datocms'
import { getLayout } from '@components/layouts/SiteLayout'
import ConnectionStatus from '@components/ConnectionStatus'
import ConnectionError from '@components/ConnectionError'
import { POSTS_PER_PAGE } from 'src/utils/constants'
import PostsList from '@components/ui/lists/PostsList'
import { usePreviewSubscription } from '@lib/sanity'
import { PostsQuery } from 'services/sanity/posts'
import sanity from '@lib/sanity/client'
import { getBlogPosts } from '@lib/datocms/blog'
import BlogPostsQuery from '@lib/datocms/queries/BlogPosts'
import { getPosts } from '@lib/content/posts'
import Pagination from '@components/utility/Pagination'
import PreviewBanner from '@components/sections/PreviewBanner'

interface Props {
  subscription: any
  // posts: Post[]
  preview: boolean
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  // sanity.setPreviewMode(preview)

  // const posts = await getPosts()
  const graphqlRequest = {
    query: BlogPostsQuery,
    variables: { limit: 10 },
    preview,
  }

  const posts = await getBlogPosts(preview)

  const subscription = preview
    ? {
        ...graphqlRequest,
        initialData: posts,
        token: process.env.DATOCMS_API_TOKEN,
      }
    : {
        enabled: false,
        initialData: posts,
      }

  return {
    props: {
      subscription,
      // posts,
      preview,
    },
    revalidate: 1,
  }
}

const PostsPage: NextPage<Props> = ({ subscription, preview }) => {
  // const { data } = usePreviewSubscription(PostsQuery, {
  //   params: { count: POSTS_PER_PAGE },
  //   initialData: posts,
  //   enabled: preview,
  // })

  const { data, status, error } = useQuerySubscription(subscription)

  console.dir(data, { colors: true, depth: null })

  return (
    <>
      {process.env.NODE_ENV === 'development' && <PreviewBanner preview={preview} />}
      <Flex flexDir="column" alignItems="center">
        <Heading>This Site Loads MDX From DatoCMS</Heading>
        <Text>View any of these pages to see it in action:</Text>
        <ConnectionStatus status={status} />
        {error && <ConnectionError error={error} />}
        {data && <PostsList posts={data} />}
        <Pagination />
      </Flex>
    </>
  )
}

PostsPage.getLayout = getLayout

export default PostsPage
