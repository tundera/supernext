import type { GetStaticProps } from 'next'

import { getDataHooksProps } from 'next-data-hooks'

import BlogHome from '@routes/blog/components/BlogIndex'

export const getStaticProps: GetStaticProps = async (context) => {
  const dataHooksProps = await getDataHooksProps({
    context,
    dataHooks: BlogHome.dataHooks,
  })

  return {
    props: {
      ...dataHooksProps,
    },
    revalidate: 1,
  }
}

export default BlogHome
