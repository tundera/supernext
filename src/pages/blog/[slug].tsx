import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'

import { getAllPages } from '@lib/sanity/pages'
import { Code } from '@chakra-ui/react'

type Props = { slug: string }

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      slug: params?.slug,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await getAllPages()

  return {
    paths: pages.map((page) => `/blog/${page.slug.current}`),
    fallback: true,
  }
}

const BlogPostPage: NextPage<Props> = (props) => {
  return (
    <pre>
      <Code>{JSON.stringify(props, null, 2)}</Code>
    </pre>
  )
}

export default BlogPostPage
