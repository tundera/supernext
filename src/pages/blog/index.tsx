/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage, GetStaticProps } from 'next'
import type { Post } from 'generated/sanity'

import { Stack, Heading, Text } from '@chakra-ui/react'

import { getPosts } from '@lib/sanity/posts'
import PageLayout from '@layouts/PageLayout'
import { POSTS_PER_PAGE } from 'constants/sanity'
import PostsList from '@components/PostsList'

type Props = {
  posts: Post[]
  preview: boolean
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const posts = await getPosts(POSTS_PER_PAGE)

  return {
    props: { posts, preview },
  }
}

const BlogPage: NextPage<Props> = ({ posts, preview }) => {
  return (
    <>
      <PageLayout preview={preview}>
        <Stack>
          <Heading>This Site Loads MDX From Sanity.io</Heading>
          <Text>View any of these pages to see it in action:</Text>
          <PostsList posts={posts} />
        </Stack>
      </PageLayout>
    </>
  )
}

export default BlogPage
