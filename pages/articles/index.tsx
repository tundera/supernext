import type { GetStaticProps } from 'next'
import type { CustomNextPage as NextPage } from 'types'
import type { Article } from 'content/types'

import { Stack, Heading } from '@chakra-ui/react'

import { getLayout } from '@components/layouts/SiteLayout'
import ArticlesList from '@components/ui/lists/ArticlesList'
import { getContentItems } from '@lib/content'

interface Props {
  articles: Article[]
}
export const getStaticProps: GetStaticProps = async () => {
  const articles = await getContentItems('articles')

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
      <Stack spacing={8}>
        <Heading as="h1" size="xl">
          Articles
        </Heading>
        <ArticlesList title="Recent Articles" articles={articles} />
      </Stack>
    </>
  )
}

ArticlesPage.getLayout = getLayout

export default ArticlesPage
