import type { GetStaticProps } from 'next'
import type { CustomNextPage as NextPage } from 'types'

import { Flex, Heading, Text } from '@chakra-ui/react'
import { useQuerySubscription } from 'react-datocms'
import { getLayout } from '@components/layouts/SiteLayout'
import ConnectionStatus from '@components/ConnectionStatus'
import ConnectionError from '@components/ConnectionError'
import { POSTS_PER_PAGE } from 'src/utils/constants'
import PostsList from '@components/ui/lists/PostsList'
import { getBlogPosts } from '@lib/datocms/blog'
import BlogPostsQuery from '@lib/datocms/queries/BlogPosts'
import Pagination from '@components/utility/Pagination'

interface Props {
  subscription: any
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const graphqlRequest = {
    query: BlogPostsQuery,
    variables: { limit: POSTS_PER_PAGE },
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
    },
    revalidate: 1,
  }
}

const PostsPage: NextPage<Props> = ({ subscription }) => {
  const {
    data: { allBlogPosts },
    status,
    error,
  } = useQuerySubscription(subscription)

  return (
    <>
      <Flex flexDir="column" alignItems="center">
        <Heading>This Site Loads MDX From DatoCMS</Heading>
        <Text>View any of these pages to see it in action:</Text>
        <ConnectionStatus status={status} />
        {error && <ConnectionError error={error} />}
        {allBlogPosts && <PostsList posts={allBlogPosts} />}
        <Pagination />
      </Flex>
    </>
  )
}

PostsPage.getLayout = getLayout

export default PostsPage
