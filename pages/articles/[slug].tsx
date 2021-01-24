import type { GetStaticPaths, GetStaticProps } from 'next'

import fs from 'fs'
import path from 'path'

import { getDataHooksProps } from 'next-data-hooks'

import Article from '@routes/articles/article'

const root = process.cwd()

export const getStaticProps: GetStaticProps = async (context) => {
  const dataHooksProps = await getDataHooksProps({
    context,
    dataHooks: Article.dataHooks,
  })

  if (!dataHooksProps.nextDataHooks.Article.article) {
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
  return {
    paths: fs.readdirSync(path.join(root, 'src/services/content/articles')).map((p) => ({
      params: {
        slug: p.replace(/\.mdx?/, ''),
      },
    })),
    fallback: 'blocking',
  }
}

export default Article
