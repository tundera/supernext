import type { InferGetStaticPropsType } from 'next'

import { Stack, Heading } from '@chakra-ui/react'

import PageLayout from '@components/layouts/PageLayout'
import ArticlesList from '@components/ui/compound/ArticlesList'
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

const Articles = ({ articles, preview }: InferGetStaticPropsType<typeof getStaticProps>) => {
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

export default Articles
