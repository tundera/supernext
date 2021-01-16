import type { GetStaticProps, NextPage } from 'next'

import Head from 'next/head'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { Heading, Stack } from '@chakra-ui/react'
import { renderMetaTags, SeoMetaTagType } from 'react-datocms'

import PageLayout from '@layouts/PageLayout'
import { useBlogPosts } from '@hooks/react-query/useBlogPosts'
import { getAllBlogPosts } from '@lib/datocms/blog'
import { getPageSeo } from '@lib/datocms/seo'

type Props = {
  metaTags: SeoMetaTagType[]
  preview: boolean
}

const title = 'Blog'

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('blog-posts', getAllBlogPosts)

  const data = await getPageSeo(title)
  const metaTags = data.page.seo.concat(data.site.favicon)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      metaTags,
      preview,
    },
  }
}

const BlogPage: NextPage<Props> = ({ metaTags, preview }) => {
  const { data: posts } = useBlogPosts()

  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <PageLayout preview={preview}>
        <Stack spacing={8}>
          <Heading as="h1" size="xl">
            Blog
          </Heading>
          <pre>
            <code>{JSON.stringify(posts, null, 4)}</code>
          </pre>
        </Stack>
      </PageLayout>
      /
    </>
  )
}

export default BlogPage
