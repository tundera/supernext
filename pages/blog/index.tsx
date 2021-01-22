/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'

import { Stack, Heading, Text } from '@chakra-ui/react'

import PageLayout from '@layouts/PageLayout'
import { POSTS_PER_PAGE } from 'constants/sanity'
import PostsList from '@components/PostsList'
import { usePreviewSubscription } from '@lib/sanity'
import sanity from '@lib/sanity/client'
import { getPosts } from 'services/sanity/posts'

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  sanity.setPreviewMode(preview)

  const posts = await sanity.getAll('post')

  return {
    props: { data: posts, preview },
    revalidate: 1,
  }
}

const BlogPage: NextPage = ({ data, preview }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data: posts } = usePreviewSubscription(getPosts, {
    params: { count: POSTS_PER_PAGE },
    initialData: data,
    enabled: preview,
  })

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
