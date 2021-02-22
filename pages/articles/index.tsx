import type { GetStaticProps } from 'next'
import type { CustomNextPage as NextPage } from 'types'
import type { Article } from 'content/types'

import { Stack, Heading, Flex } from '@chakra-ui/react'

import { getLayout } from '@components/layouts/SiteLayout'
import Pagination from '@components/utility/Pagination'
import ArticlesList from '@components/ui/lists/ArticlesList'
import { getContentFiles } from '@lib/content'

interface Props {
  articles: Article[]
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getContentFiles('articles')

  return {
    props: {
      articles,
    },
    revalidate: 1,
  }
}

const ArticlesPage: NextPage<Props> = ({ articles }) => {
  return (
    <>
      <Flex alignItems="center" justifyContent="center">
        <Stack spacing={8}>
          <Heading as="h1" size="xl">
            Articles
          </Heading>
          <ArticlesList title="Recent Articles" articles={articles} />
          <Pagination />
        </Stack>
      </Flex>
    </>
  )
}

ArticlesPage.getLayout = getLayout

export default ArticlesPage
