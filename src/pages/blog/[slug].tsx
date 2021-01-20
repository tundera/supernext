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
import { print } from 'graphql'

import Callout from '@components/Callout'
import PageLayout from '@layouts/PageLayout'
import BlogPostLayout from '@layouts/BlogPostLayout'
import { usePreviewSubscription } from '@utils/sanity/client'
import LoadingSpinner from '@components/LoadingSpinner'

type Props = {
  post: Post
  markup: MdxRemote.Source
  preview: boolean
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
  const slug = `${params?.slug}`
  const [post] = await getPostBySlug(slug)

  const markup = await renderToString(post?.content ?? '', {
    components: { Callout },
  })

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
      markup,
      preview,
    },
    revalidate: 1,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts()

  return {
    paths: posts.map((post) => `/blog/${post.slug?.current}`),
    fallback: true,
  }
}

const BlogPostPage: NextPage<Props> = ({ post, markup, preview }) => {
  const { data } = usePreviewSubscription(print(PostBySlugDocument), {
    params: { slug: post ? post.slug?.current : '' },
    initialData: post,
    enabled: preview,
  })

  const renderedContent = hydrate(markup ?? '', {
    components: {
      Callout,
    },
  })

  const router = useRouter()

  if (router.isFallback) {
    return <LoadingSpinner />
  }

  // if (!router.isFallback && !post.slug) {
  //   return <ErrorPage statusCode={404} />
  // }

  return (
    <>
      <PageLayout preview={preview}>
        {data && (
          <>
            <Stack>
              <Heading>{data.title}</Heading>
              <Flex flexDir="column" w="500" h="300" alignItems="center">
                <Image src={data.coverImage?.asset?.url || ''} width={500} height={300} />
              </Flex>
              <Text>{data.author?.name}</Text>
              <Text>{data.date}</Text>
            </Stack>
            <BlogPostLayout>{renderedContent}</BlogPostLayout>
          </>
        )}
      </PageLayout>
    </>
  )
}

export default BlogPostPage
