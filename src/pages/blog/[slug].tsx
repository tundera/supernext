import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
// import type { BlogPost } from 'types/datocms'

import Head from 'next/head'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { Image, renderMetaTags, SeoMetaTagType, useQuerySubscription } from 'react-datocms'
import { Box, Code, Heading, Text } from '@chakra-ui/react'

import PageLayout from '@layouts/PageLayout'
import BlogPostLayout from '@layouts/BlogPostLayout'
import { getSingleBlogPost, getAllBlogPosts } from '@lib/datocms/blog'
import { getBlogPostSeo } from '@lib/datocms/seo'
import ConnectionStatus from '@components/live/ConnectionStatus'
import ConnectionError from '@components/live/ConnectionError'
import BlogPostBySlugQuery from '@graphql/datocms/queries/BlogPostBySlug'

type Props = {
  subscription: any
  metaTags: SeoMetaTagType[]
  preview: boolean
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
  const slug = params?.slug as string
  const post = await getSingleBlogPost(slug, preview)

  const graphqlRequest = {
    query: BlogPostBySlugQuery,
    variables: { slug },
    preview,
  }

  const subscription = preview
    ? {
        ...graphqlRequest,
        initialData: post,
        token: process.env.NEXT_DATOCMS_API_TOKEN,
      }
    : {
        enabled: false,
        initialData: post,
      }

  const data = await getBlogPostSeo(slug)
  const metaTags = data.blogPost.seo.concat(data.site.favicon)

  return {
    props: {
      subscription,
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

const BlogPostPage: NextPage<Props> = ({ subscription, metaTags, preview }) => {
  const { data, error, status } = useQuerySubscription(subscription)
  const router = useRouter()

  if (router.isFallback) {
    return (
      <>
        <p>Loading...</p>
      </>
    )
  }

  if (!router.isFallback && !subscription?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      {router.isReady && <Head>{renderMetaTags(metaTags)}</Head>}
      <PageLayout preview={preview}>
        <BlogPostLayout>
          <ConnectionStatus status={status} />
          {error && <ConnectionError error={error} />}
          {data && (
            <Box mb={2}>
              {data && <Code>{JSON.stringify(data, null, 4)}</Code>}
              <Heading>{data?.title}</Heading>
              {data?.coverImage && <Image data={data?.coverImage?.responsiveImage} />}
              {data?.date && <Text opacity="0.6">{data?.date}</Text>}
            </Box>
          )}
          <Text>{data?.content}</Text>
        </BlogPostLayout>
      </PageLayout>
    </>
  )
}

export default BlogPostPage
