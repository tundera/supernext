import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'

// import fs from 'fs'
// import matter from 'gray-matter'
import { useRouter } from 'next/router'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import { getAllPosts, getPostBySlug } from '@lib/sanity/posts'
import { Heading, Text } from '@chakra-ui/react'

import Callout from '@components/Callout'
import PageLayout from '@layouts/PageLayout'
import BlogPostLayout from '@layouts/BlogPostLayout'
import { BlogPost } from 'types/sanity'

type Props = {
  content: string
  title: string
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = `${params?.slug}`
  const [{ content, title }] = await getPostBySlug(slug)

  const markup = await renderToString(content, {
    components: { Callout },
  })

  return {
    props: {
      title,
      content: markup,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: BlogPost[] = await getAllPosts()

  return {
    paths: posts.map((post) => `/blog/${post.slug.current}`),
    fallback: true,
  }
}

const BlogPostPage: NextPage<Props> = ({ content, title }) => {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <Text>Loading...</Text>
  }

  const renderedContent = hydrate(content, {
    components: {
      Callout,
    },
  })

  return (
    <PageLayout>
      <Heading>{title}</Heading>
      <BlogPostLayout>{renderedContent}</BlogPostLayout>
    </PageLayout>
  )
}

export default BlogPostPage
