import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import type { BlogPost } from 'types/datocms'

import Head from 'next/head'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { Image, renderMetaTags, SeoMetaTagType } from 'react-datocms'
import { Box, Code, Heading, Text } from '@chakra-ui/react'

import PageLayout from '@layouts/PageLayout'
import BlogPostLayout from '@layouts/BlogPostLayout'
import { getSingleBlogPost, getAllBlogPosts } from '@lib/datocms/blog'
import { getBlogPostSeo } from '@lib/datocms/seo'
import ConnectionStatus from '@components/live/ConnectionStatus'
import ConnectionError from '@components/live/ConnectionError'

type Props = {
  post: BlogPost
  metaTags: SeoMetaTagType[]
  preview: boolean
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
  const slug = params?.slug as string
  const post = await getSingleBlogPost(slug, preview)

  const data = await getBlogPostSeo(slug)
  const metaTags = data.blogPost.seo.concat(data.site.favicon)

  return {
    props: {
      post,
      metaTags,
      preview,
    },
    revalidate: 1,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allBlogPosts = await getAllBlogPosts()

  return {
    paths: allBlogPosts.map((post) => `/blog/${post?.slug}`) || [],
    fallback: true,
  }
}

const BlogPostPage: NextPage<Props> = ({ post, metaTags, preview }) => {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <>
        <p>Loading...</p>
      </>
    )
  }

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      {router.isReady && <Head>{renderMetaTags(metaTags)}</Head>}
      <PageLayout preview={preview}>
        <BlogPostLayout>
          <ConnectionStatus status={status} />
          {error && <ConnectionError error={error} />}
          {post && (
            <Box mb={2}>
              {post && <Code>{JSON.stringify(post, null, 4)}</Code>}
              <Heading>{post?.title}</Heading>
              {post?.coverImage && <Image data={post?.coverImage?.responsiveImage} />}
              {post?.date && <Text opacity="0.6">{post?.date}</Text>}
            </Box>
          )}
          <Text>{post?.content}</Text>
        </BlogPostLayout>
      </PageLayout>
    </>
  )
}

export default BlogPostPage
