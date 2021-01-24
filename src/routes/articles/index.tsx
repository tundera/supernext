import { Stack, Heading } from '@chakra-ui/react'

import PageLayout from '@components/layouts/PageLayout'
import { useArticlesData } from '@hooks/useArticlesData'
import ArticlesList from '@components/ui/compound/ArticlesList'

const ArticlesIndex = () => {
  const { articles, preview } = useArticlesData()

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

ArticlesIndex.dataHooks = [useArticlesData]

export default ArticlesIndex
