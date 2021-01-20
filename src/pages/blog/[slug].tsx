import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import type { Author, Image as ImageType } from 'generated/sanity'
// import fs from 'fs'
// import matter from 'gray-matter'
import { useRouter } from 'next/router'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import { getPosts, getPostBySlug } from '@lib/sanity/posts'
import { Flex, Heading, Stack, Text } from '@chakra-ui/react'

import Callout from '@components/Callout'
import PageLayout from '@layouts/PageLayout'
import BlogPostLayout from '@layouts/BlogPostLayout'
import { GENERATED_POSTS_LIMIT } from 'constants/sanity'
import Image from 'next/image'

type Props = {
  title: string
  date: string
  author: Author
  slug: string
  excerpt: string
  coverImage: ImageType
  content: string
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = `${params?.slug}`
  const [post] = await getPostBySlug(slug)

  const content = `${post.content}`
  const markup = await renderToString(content, {
    components: { Callout },
  })

  return {
    props: {
      title: post.title,
      author: post.author,
      date: post.date,
      coverImage: post.coverImage,
      content: markup,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts(GENERATED_POSTS_LIMIT)
  console.dir(posts, { colors: true, depth: null })
  return {
    paths: posts.map((post) => `/blog/${post.slug?.current}`),
    fallback: true,
  }
}

const BlogPostPage: NextPage<Props> = ({ title, author, date, coverImage, content }) => {
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
      <Stack>
        <Heading>{title}</Heading>
        <Flex flexDir="column" w="500" h="300" alignItems="center">
          <Image src={coverImage.asset?.url || ''} width={500} height={300} />
        </Flex>
        <Text>{author.name}</Text>
        <Text>{date}</Text>
      </Stack>
      <BlogPostLayout>{renderedContent}</BlogPostLayout>
    </PageLayout>
  )
}

export default BlogPostPage
