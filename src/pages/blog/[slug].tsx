import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { Post, PostBySlugDocument } from 'generated/sanity'
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
import { groq } from 'next-sanity'
import { print } from 'graphql'

import Callout from '@components/Callout'
import PageLayout from '@layouts/PageLayout'
import BlogPostLayout from '@layouts/BlogPostLayout'
import { usePreviewSubscription, sanityClient, previewClient } from '@utils/sanity/client'

type Props = {
  post: Post
  markup: MdxRemote.Source
  preview: boolean
  config: {
    params?: Record<string, unknown>
    initialData?: any
  }
}

// const postQuery = groq`
//   *[_type == "post" && slug.current == $slug][0] {
//     _id,
//     title,
//     body,
//     coverImage,
//     author->{
//       _id,
//       name
//       avatar
//     },
//     "slug": slug.current
//   }
// `

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
  const slug = `${params?.slug}`
  const [post] = await getPostBySlug(slug)

  const config = {
    params: { slug: post ? post.slug?.current : '' },
    initialData: post,
    enabled: preview,
  }

  const markup = await renderToString(post?.content ?? '', {
    components: { Callout },
  })

  return {
    props: {
      post,
      config,
      markup,
      preview,
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

const BlogPostPage: NextPage<Props> = ({ post, config, markup, preview }) => {
  // const options = {
  //   params: { slug: post ? post.slug?.current : '' },
  //   initialData: post,
  //   enabled: preview,
  // }

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
  //   { ...config, enabled: preview },
  // )

  const { data } = usePreviewSubscription(print(PostBySlugDocument), { ...config, enabled: preview })

  const router = useRouter()

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
        <Heading>{data.title}</Heading>
        <Flex flexDir="column" w="500" h="300" alignItems="center">
          <Image src={data.coverImage?.asset?.url || ''} width={500} height={300} />
        </Flex>
        <Text>{data.author?.name}</Text>
        <Text>{data.date}</Text>
      </Stack>
      <BlogPostLayout>{renderedContent}</BlogPostLayout>
    </PageLayout>
  )
}

export default BlogPostPage
