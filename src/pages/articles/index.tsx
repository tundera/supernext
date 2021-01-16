import type { GetStaticProps, NextPage } from 'next'
import type { Article } from 'types/content'

import Head from 'next/head'
import { Heading, Stack } from '@chakra-ui/react'
import { renderMetaTags, SeoMetaTagType } from 'react-datocms'

import PageLayout from '@layouts/PageLayout'
import ArticlesList from '@components/ArticlesList'
import { getArticles } from '@lib/local/getArticles'
import { getPageSeo } from '@lib/datocms/seo'

type Props = {
  articles: Article[]
  metaTags: SeoMetaTagType[]
}

const title = 'Articles'

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getArticles()

  const data = await getPageSeo(title)
  const metaTags = data.page.seo.concat(data.site.favicon)

  return {
    props: {
      articles,
      metaTags,
    },
  }
}

const ArticlesPage: NextPage<Props> = ({ articles, metaTags }) => {
  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <PageLayout>
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