import type { GetStaticProps, NextPage } from 'next'
import type { BlogPost } from 'src/types/blog'

import { Heading, Stack } from '@chakra-ui/react'

import PageLayout from '@layouts/PageLayout'
import PostsList from '@components/PostsList'
import { fetchBlogPosts } from '@lib/local/fetchBlogPosts'

type Props = {
  posts: BlogPost[]
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchBlogPosts()

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
