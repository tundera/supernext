import type { GetStaticProps } from 'next'

import { getDataHooksProps } from 'next-data-hooks'

import ArticlesIndex from '@routes/articles'

export const getStaticProps: GetStaticProps = async (context) => {
  const dataHooksProps = await getDataHooksProps({
    context,
    dataHooks: ArticlesIndex.dataHooks,
  })

  return {
    props: {
      ...dataHooksProps,
    },
    revalidate: 1,
  }
}

export default ArticlesIndex
