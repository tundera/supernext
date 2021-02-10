import type { InferGetStaticPropsType } from 'next'

import { Stack, Heading } from '@chakra-ui/react'

import SiteLayout from '@components/layouts/SiteLayout'
import ArticlesList from '@components/ui/lists/ArticlesList'
import { getAllArticles } from '@lib/content/articles'

export const getStaticProps = async ({ preview = false }) => {
  const articles = await getAllArticles()

  return {
    props: {
      articles,
      preview,
    },
    revalidate: 1,
  }
}

const ArticlesPage = ({ articles, preview }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <SiteLayout preview={preview}>
        <Stack spacing={8}>
          <Heading as="h1" size="xl">
            Articles
          </Heading>
          <ArticlesList title="Recent Articles" articles={articles} />
        </Stack>
      </SiteLayout>
    </>
  )
}

export default ArticlesPage
