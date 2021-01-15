import type { GetStaticProps, NextPage } from 'next'

import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { Heading, Stack } from '@chakra-ui/react'

import PageLayout from '@layouts/PageLayout'
import { getBlogPosts, useBlogPosts } from '@hooks/react-query/useBlogPosts'

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('blog-posts', getBlogPosts)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const BlogPage: NextPage = () => {
  const { data: posts } = useBlogPosts()

  return (
    <PageLayout title="Blog">
      <Stack spacing={8}>
        <Heading as="h1" size="xl">
          Blog
        </Heading>
        <pre>
          <code>{JSON.stringify(posts, null, 4)}</code>
        </pre>
      </Stack>
    </PageLayout>
  )
}

export default BlogPage
