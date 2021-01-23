import type { GetStaticProps, GetStaticPaths } from 'next'

// import ErrorPage from 'next/error'
import { getDataHooksProps } from 'next-data-hooks'

import BlogPost from '@routes/blog/components/Post'
import sanity from '@lib/sanity/client'

export const getStaticProps: GetStaticProps = async (context) => {
  const dataHooksProps = await getDataHooksProps({
    context,
    dataHooks: BlogPost.dataHooks,
  })

  if (!dataHooksProps.nextDataHooks.BlogPost.post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      ...dataHooksProps,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await sanity.getAll('post')
  const paths = posts.map((post) => `/blog/${post.slug.current}`)

  return {
    paths,
    fallback: 'blocking',
  }
}

export default BlogPost
