import type { GetStaticProps } from 'next'

import { getDataHooksProps } from 'next-data-hooks'

import BlogIndex from '@routes/blog'

export const getStaticProps: GetStaticProps = async (context) => {
  const dataHooksProps = await getDataHooksProps({
    context,
    dataHooks: BlogIndex.dataHooks,
  })

  return {
    props: {
      ...dataHooksProps,
    },
    revalidate: 1,
  }
}

export default BlogIndex
