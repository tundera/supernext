import type { GetStaticProps, NextPage } from 'next'
import type { BlogPost } from 'types/blog'

import { Heading, Stack } from '@chakra-ui/react'

import PageLayout from '@layouts/PageLayout'
import PostsList from '@components/PostsList'
import { getBlogPosts } from '@lib/local/getBlogPosts'

type Props = {
  posts: BlogPost[]
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getBlogPosts()

  return {
    props: {
      posts,
    },
  }
}

const BlogPage: NextPage<Props> = ({ posts }) => {
  return (
    <PageLayout title="Blog Posts">
      <Stack spacing={8}>
        <Heading as="h1" size="xl">
          Chakra Base
        </Heading>
        <PostsList title="Recent Blog Posts" posts={posts} />
      </Stack>
    </PageLayout>
  )
}

export default BlogPage
