import type { NextPage, GetStaticPaths, GetStaticProps } from 'next'

import renderToString from 'next-mdx-remote/render-to-string'
import Image from 'next/image'
import hydrate from 'next-mdx-remote/hydrate'
import { useRouter } from 'next/router'
import { Flex, Box, Heading, Text } from '@chakra-ui/react'

import sanity from '@lib/sanity/client'
import { getPostBySlug } from '@lib/content/posts'
import CodeBlock from '@components/ui/snippets/CodeBlock'
import PageLayout from '@components/layouts/PageLayout'
import LoadingSpinner from '@components/utility/suspense/LoadingSpinner'
import { createImageUrl } from 'src/utils/sanity'

import { usePreviewSubscription } from '@lib/sanity'
import { PostBySlugQuery } from 'services/sanity/posts'
import { PromiseReturnType } from 'blitz'

type Props = {
  post: PromiseReturnType<typeof getPostBySlug>
  preview: boolean
}
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
    fallback: false,
  }
}

const PostPage: NextPage<Props> = ({ post, preview }) => {
  const router = useRouter()

  const { data } = usePreviewSubscription(PostBySlugQuery, {
    params: { slug: post?.slug.current ?? '' },
    initialData: post,
    enabled: preview,
  })

  const renderedContent = hydrate(data?.content ?? '', {
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
        <Flex flexDir="column" alignItems="center">
          <Box padding="4" bg="gray.100" color="brand.500">
            <Heading>{data?.title}</Heading>
            <Flex flexDir="column" alignItems="center" position="relative">
              <Image
                src={createImageUrl(data?.coverImage?.asset?._ref as string).url() || ''}
                width={500}
                height={300}
              />
            </Flex>
            <Text>{data?.author.name}</Text>
            <Text>{data?.date}</Text>
            {router.isReady && renderedContent}
          </Box>
        </Flex>
      </PageLayout>
    </>
  )
}

export default PostPage
