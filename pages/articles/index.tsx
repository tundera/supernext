import type { GetStaticProps, NextPage } from 'next'
import type { Article } from 'services/content/types'

import { Heading, Stack } from '@chakra-ui/react'

import PageLayout from '@common/components/layouts/PageLayout'
import ArticlesList from '@common/components/ui/compound/ArticlesList'
import { getAllArticles } from '@lib/content/articles'

type Props = {
  articles: Article[]
  preview: boolean
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const articles = await getAllArticles()

  return {
    props: {
      articles,
      preview,
    },
    revalidate: 1,
  }
}

const ArticlesPage: NextPage<Props> = ({ articles, preview }) => {
  return (
    <>
      <PageLayout preview={preview}>
        <Stack spacing={8}>
          <Heading as="h1" size="xl">
            Articles
          </Heading>
          <ArticlesList title="Recent Articles" articles={articles} />
        </Stack>
      </PageLayout>
    </>
  )
}

export default ArticlesPage
