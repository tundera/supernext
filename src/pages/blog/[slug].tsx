import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { Post } from 'generated/sanity'
import type { MdxRemote } from 'next-mdx-remote/types'

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
import { usePreviewSubscription, getClient } from '@lib/sanity'
import { createImageUrl } from '@utils/sanity'
import LoadingSpinner from '@components/LoadingSpinner'
import { Suspense } from 'react'

type Props = {
  post: Post
  markup: MdxRemote.Source
  preview: boolean
}

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

const getPosts = groq`*[_type == "post" && defined(slug.current)][].slug.current`

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
  const slug = `${params?.slug}`
  const post = await getClient(preview).fetch(getPostBySlug, {
    slug,
  })

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
  const slugs: string[] = await getClient().fetch(getPosts)

  return {
    paths: slugs.map((slug) => `/blog/${slug}`),
    fallback: true,
  }
}

const BlogPostPage: NextPage<Props> = ({ post, markup, preview }) => {
  const { data } = usePreviewSubscription(getPostBySlug, {
    params: { slug: post ? post.slug : '' },
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
            <BlogPostLayout>
              <Heading>{data.title}</Heading>
              <Flex flexDir="column" w="500" h="300" alignItems="center">
                <Suspense fallback={<LoadingSpinner />}>
                  <Image src={createImageUrl(data.coverImage?.asset as string).url() || ''} width={500} height={300} />
                </Suspense>
              </Flex>
              <Text>{data.author?.name}</Text>
              <Text>{data.date}</Text>
              {renderedContent}
            </BlogPostLayout>
          </>
        )}
      </PageLayout>
    </>
  )
}

export default BlogPostPage
