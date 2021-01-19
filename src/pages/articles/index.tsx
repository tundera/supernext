import type { GetStaticProps, NextPage } from 'next'
import type { Article } from 'types/content'

import { Heading, Stack } from '@chakra-ui/react'

import PageLayout from '@layouts/PageLayout'
import ArticlesList from '@components/ArticlesList'
import { getArticles } from '@lib/local/getArticles'

type Props = {
  articles: Article[]
  preview: boolean
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const articles = await getArticles()

  return {
    props: {
      articles,
      preview,
    },
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
