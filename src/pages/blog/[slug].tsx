import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { Post } from 'generated/sanity'
import type { MdxRemote } from 'next-mdx-remote/types'

// import fs from 'fs'
// import matter from 'gray-matter'
import ErrorPage from 'next/error'
import Image from 'next/image'
import { useRouter } from 'next/router'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import { getPosts, getPostBySlug } from '@lib/sanity/posts'
import { Flex, Heading, Stack, Text } from '@chakra-ui/react'

import Callout from '@components/Callout'
import PageLayout from '@layouts/PageLayout'
import BlogPostLayout from '@layouts/BlogPostLayout'
import { usePreviewSubscription } from '@utils/sanity/preview'

type Props = {
  post: Post
  markup: MdxRemote.Source
  preview: boolean
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = `${params?.slug}`
  const [post] = await getPostBySlug(slug)

  const markup = await renderToString(post?.content ?? '', {
    components: { Callout },
  })

  return {
    props: {
      post,
      markup,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts()

  return {
    paths: posts.map((post) => `/blog/${post.slug?.current}`),
    fallback: true,
  }
}

const BlogPostPage: NextPage<Props> = ({ post, markup, preview = false }) => {
  const router = useRouter()

  // const { data } = usePreviewSubscription(
  //   `
  //     query PostBySlug($slug: String!) {
  //       allPost(where: { slug: { current: { eq: $slug } } }) {
  //         title
  //         author {
  //           name
  //           avatar {
  //             asset {
  //               url
  //             }
  //           }
  //         }
  //         date
  //         coverImage {
  //           asset {
  //             url
  //           }
  //         }
  //         content
  //       }
  //     }
  //   `,
  //   {
  //     params: { slug: post.slug?.current ?? '' },
  //     initialData: post,
  //     enabled: preview,
  //   },
  // )

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <Text>Loading...</Text>
  }

  if (!router.isFallback && !post.slug?.current) {
    return <ErrorPage statusCode={404} />
  }

  const renderedContent = hydrate(markup, {
    components: {
      Callout,
    },
  })

  return (
    <PageLayout>
      <Stack>
        <Heading>{post.title}</Heading>
        <Flex flexDir="column" w="500" h="300" alignItems="center">
          <Image src={post.coverImage?.asset?.url || ''} width={500} height={300} />
        </Flex>
        <Text>{post.author?.name}</Text>
        <Text>{post.date}</Text>
      </Stack>
      <BlogPostLayout>{renderedContent}</BlogPostLayout>
    </PageLayout>
  )
}

export default BlogPostPage
