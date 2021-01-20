/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage, GetStaticProps } from 'next'
import type { Post } from 'generated/sanity'

import NextLink from 'next/link'
import { Box, Heading, Text } from '@chakra-ui/react'

import { getPosts } from '@lib/sanity/posts'
import { POSTS_PER_PAGE } from 'constants/sanity'
import PostsList from '@components/PostsList'

type Props = {
  posts: Post[]
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getPosts(POSTS_PER_PAGE)

  const posts = data?.map((post) => ({
    title: post.title,
    author: post.author,
    slug: post.slug,
  }))

  return {
    props: { posts },
  }
}

const BlogPage: NextPage<Props> = ({ posts }) => {
  return (
    <Box>
      <Heading>This Site Loads MDX From Sanity.io</Heading>
      <Text>View any of these pages to see it in action:</Text>
      <PostsList posts={posts} />
    </Box>
  )
}

export default BlogPage
