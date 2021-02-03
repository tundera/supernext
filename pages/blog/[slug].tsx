import type { GetStaticPaths, GetStaticProps } from 'next'

import renderToString from 'next-mdx-remote/render-to-string'
import Image from 'next/image'
import hydrate from 'next-mdx-remote/hydrate'
import { useRouter } from 'next/router'
import { Suspense } from 'react'
import { Flex, Box, Container, Heading, Text } from '@chakra-ui/react'

import sanity from '@lib/sanity/client'
import { getPostBySlug } from '@lib/content/posts'
import CodeBlock from '@components/ui/CodeBlock'
import PageLayout from '@components/layouts/PageLayout'
import LoadingSpinner from '@components/utility/LoadingSpinner'
import { createImageUrl } from 'src/utils/sanity'

import { usePreviewSubscription } from '@lib/sanity'
import { PostBySlugQuery } from 'services/sanity/posts'

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
  sanity.setPreviewMode(preview)

  const pageSlug = params?.slug as string
  const {
    content,
    slug: { current },
    ...rest
  } = await getPostBySlug(pageSlug)

  if (current !== pageSlug || !content) {
    return {
      notFound: true,
    }
  }

  const markup = await renderToString(content ?? '', {
    components: { CodeBlock },
  })

  return {
    props: {
      post: {
        content: markup,
        slug: current,
        ...rest,
      },
      preview,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await sanity.getAll('post')
  const paths = posts.map((post) => `/blog/${post?.slug?.current}`)

  return {
    paths,
    fallback: 'blocking',
  }
}

const PostPage = ({ post, preview }) => {
  const router = useRouter()

  const { data } = usePreviewSubscription(PostBySlugQuery, {
    params: { slug: post?.slug.current ?? '' },
    initialData: post,
    enabled: preview,
  })

  const renderedContent = hydrate(data.content ?? '', {
    components: {
      CodeBlock,
    },
  })

  if (router.isFallback) {
    return <LoadingSpinner />
  }

  return (
    <>
      <PageLayout preview={preview}>
        <Flex bg="gray.500" minHeight="100vh" justifyContent="center" mx="150px" py={8}>
          <Container maxW="4xl" centerContent>
            <Box padding="4" bg="gray.100">
              <Heading>{data.title}</Heading>
              <Flex flexDir="column" w="500" h="300" alignItems="center">
                <Suspense fallback={<LoadingSpinner />}>
                  <Image
                    src={createImageUrl(data.coverImage?.asset._ref as string).url() || ''}
                    width={500}
                    height={300}
                  />
                </Suspense>
              </Flex>
              <Text>{data.author.name}</Text>
              <Text>{data.date}</Text>
              {renderedContent}
            </Box>
          </Container>
        </Flex>
      </PageLayout>
    </>
  )
}

export default PostPage
