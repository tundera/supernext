import type { GetStaticPaths, GetStaticProps } from 'next'
import type { CustomNextPage as NextPage } from 'types'

import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { Flex, Box, Heading, Text } from '@chakra-ui/react'
import { useQuerySubscription, Image } from 'react-datocms'
import { getBlogPosts, getBlogPostBySlug } from '@lib/datocms/blog'
import BlogPostBySlugQuery from '@lib/datocms/queries/BlogPostBySlug'

import { getLayout } from '@components/layouts/SiteLayout'
import LoadingSpinner from '@components/utility/suspense/LoadingSpinner'
import ConnectionStatus from '@components/ConnectionStatus'
import ConnectionError from '@components/ConnectionError'
import { mdxComponents } from '@components/mdxComponents'

interface Props {
  subscription: any
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
  const pageSlug = params?.slug as string

  const post = await getBlogPostBySlug(pageSlug, preview)
  const { blogPost } = post

  if (blogPost.slug !== pageSlug || !blogPost.content) {
    return {
      notFound: true,
    }
  }

  const graphqlRequest = {
    query: BlogPostBySlugQuery,
    variables: { slug: pageSlug },
    preview,
  }

  const markup = await renderToString(blogPost.content, {
    components: mdxComponents,
    mdxOptions: {
      remarkPlugins: [
        require('remark-slug'),
        require('remark-code-titles'),
        require('remark-toc'),
        require('remark-external-links'),
      ],
      rehypePlugins: [require('rehype-autolink-headings')],
      compilers: [],
    },
  })

  const subscription = preview
    ? {
        ...graphqlRequest,
        initialData: {
          ...post,
          content: markup,
        },
        token: process.env.DATOCMS_API_TOKEN,
      }
    : {
        enabled: false,
        initialData: {
          ...post,
          content: markup,
        },
      }

  return {
    props: {
      subscription,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { allBlogPosts } = await getBlogPosts()
  const paths = allBlogPosts.map((post) => `/blog/${post?.slug}`)

  return {
    paths,
    fallback: false,
  }
}

const PostPage: NextPage<Props> = ({ subscription }) => {
  const router = useRouter()

  const {
    data: { blogPost },
    error,
    status,
  } = useQuerySubscription(subscription)

  if (router.isFallback) {
    return (
      <>
        <Flex flexDir="column" alignItems="center">
          <LoadingSpinner />
        </Flex>
      </>
    )
  }

  if (!router.isFallback && !blogPost.slug) {
    return <ErrorPage statusCode={404} />
  }

  const renderedContent = hydrate(subscription.initialData.content, {
    components: { ...mdxComponents },
  })

  return (
    <>
      <Flex flexDir="column" alignItems="center">
        <ConnectionStatus status={status} />
        {error && <ConnectionError error={error} />}

        {blogPost && (
          <Box padding="4" bg="gray.100" color="brand.500">
            <Heading>{blogPost.title}</Heading>
            <Flex flexDir="column" alignItems="center" position="relative">
              <Image data={blogPost.coverImage.responsiveImage} />
            </Flex>
            <Text>{blogPost.author.name}</Text>
            <Text>{blogPost.date}</Text>
            {renderedContent}
          </Box>
        )}
      </Flex>
    </>
  )
}

PostPage.getLayout = getLayout

export default PostPage
