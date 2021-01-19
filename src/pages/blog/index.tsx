/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage, GetStaticProps } from 'next'
import type { BlogPost } from 'types/sanity'

import NextLink from 'next/link'
import { Box, Heading, Text, List, ListItem, ListIcon } from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'

import { getAllPosts } from '@lib/sanity/posts'

type Post = {
  title: string
  slug: string
}

type Props = {
  posts: Post[]
}

export const getStaticProps: GetStaticProps = async () => {
  const data: BlogPost[] = await getAllPosts()

  const posts = data?.map((post) => ({
    title: post.title,
    slug: post.slug.current,
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
      <List spacing={3}>
        {posts?.map(({ title, slug }) => (
          <ListItem key={title}>
            <ListIcon as={MdCheckCircle} color="green.500" />
            <NextLink href={`/blog/${slug}`}>
              <a>{title}</a>
            </NextLink>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default BlogPage
