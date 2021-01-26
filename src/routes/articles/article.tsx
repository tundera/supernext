/* eslint-disable jsx-a11y/anchor-is-valid */
import hydrate from 'next-mdx-remote/hydrate'
import NextLink from 'next/link'
import Emoji from 'a11y-react-emoji'

import { useRouter } from 'next/router'
import { Heading, Text, Box } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'

import ArticleLayout from '@components/layouts/ArticleLayout'
import PageLayout from '@components/layouts/PageLayout'
import LoadingSpinner from '@components/utility/LoadingSpinner'
import mdxComponents from '@components/mdx/article'
import { useArticleData } from '@hooks/useArticleData'

const Article = () => {
  const router = useRouter()
  const { article, frontMatter, preview } = useArticleData()

  const renderedContent = hydrate(article ?? '', { components: mdxComponents })
  const articleUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/${router.pathname}`

  if (router.isFallback) {
    return <LoadingSpinner />
  }

  return (
    <>
      <NextSeo
        openGraph={{
          title: `Next Goat | ${frontMatter.title}`,
          description: frontMatter.description,
          url: articleUrl,
          type: 'article',
          article: {
            publishedTime: frontMatter.date,
            authors: [...frontMatter.author],
            tags: frontMatter.tags,
          },
          images: [
            {
              url: frontMatter.coverImage,
              width: 500,
              height: 300,
              alt: `${frontMatter.title} article cover image`,
            },
          ],
        }}
      />
      <PageLayout preview={preview}>
        <ArticleLayout>
          <Heading>
            <nav>
              <NextLink href="/">
                <a>
                  <Emoji label="Home link emoji" symbol="👈" /> Go back home
                </a>
              </NextLink>
            </nav>
          </Heading>
          <Box mb={2}>
            <Heading>{frontMatter.title}</Heading>
            {frontMatter.description && <Text opacity="0.6">{frontMatter.description}</Text>}
          </Box>
          {renderedContent}
        </ArticleLayout>
      </PageLayout>
    </>
  )
}

Article.dataHooks = [useArticleData]

export default Article
