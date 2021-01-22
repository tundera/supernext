import type { NextPage, GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next'

// import fs from 'fs'
// import matter from 'gray-matter'
import { groq } from 'next-sanity'
// import ErrorPage from 'next/error'
import Image from 'next/image'
import { useRouter } from 'next/router'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import { Flex, Heading, Text } from '@chakra-ui/react'

import Callout from '@components/Callout'
import PageLayout from '@layouts/PageLayout'
import BlogPostLayout from '@layouts/BlogPostLayout'
import { usePreviewSubscription } from '@lib/sanity'
import sanity from '@lib/sanity/client'
import { createImageUrl } from '@utils/sanity'
import LoadingSpinner from '@components/LoadingSpinner'
import { Suspense } from 'react'

const getPostBySlug = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    content,
    date,
    coverImage,
    author->{
      _id,
      name,
      avatar
    },
    "slug": slug.current,
}
`

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
  sanity.setPreviewMode(preview)

  const slug = (params?.slug as string) || ''
  const [post] = await sanity.getAll('post', `_type == "post" && slug.current == "${slug ?? ''}"`)

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
      data: post,
      markup,
      preview,
    },
    revalidate: 1,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await sanity.getAll('post')
  return {
    paths: posts.map((post) => `/blog/${post.slug.current}`),
    fallback: true,
  }
}

const BlogPostPage: NextPage = ({ data, markup, preview }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data: post } = usePreviewSubscription(getPostBySlug, {
    params: { slug: data?.slug.current ?? '' },
    initialData: data,
    enabled: preview,
  })

  const router = useRouter()

  if (router.isFallback) {
    return <LoadingSpinner />
  }

  const renderedContent = hydrate(markup ?? '', {
    components: {
      Callout,
    },
  })

  // if (!router.isFallback && !post.slug) {
  //   return <ErrorPage statusCode={404} />
  // }

  return (
    <>
      <PageLayout preview={preview}>
        {post && (
          <>
            <BlogPostLayout>
              <Heading>{post.title}</Heading>
              <Flex flexDir="column" w="500" h="300" alignItems="center">
                <Suspense fallback={<LoadingSpinner />}>
                  <Image
                    src={createImageUrl(post.coverImage?.asset._ref as string).url() || ''}
                    width={500}
                    height={300}
                  />
                </Suspense>
              </Flex>
              <Text>{post.author.name}</Text>
              <Text>{post.date}</Text>
              {renderedContent}
            </BlogPostLayout>
          </>
        )}
      </PageLayout>
    </>
  )
}

export default BlogPostPage
