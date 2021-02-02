/* eslint-disable jsx-a11y/anchor-is-valid */
import type { GetStaticPaths, GetStaticProps } from 'next'
import type { FrontMatter } from 'services/content/types'

import fs from 'fs'
import path from 'path'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import NextLink from 'next/link'
import Emoji from 'a11y-react-emoji'

import { useRouter } from 'next/router'
import { Heading, Text, Box } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import { MdxRemote } from 'next-mdx-remote/types'

import ArticleLayout from '@components/layouts/MdxLayout'
import PageLayout from '@components/layouts/PageLayout'
import LoadingSpinner from '@components/utility/LoadingSpinner'
import mdxComponents from '@components/mdx/article'
import { getArticle } from '@lib/content/articles'

type Props = {
  article: MdxRemote.Source
  frontMatter: FrontMatter
  preview: boolean
}

const cwd = process.cwd()

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
  const pageSlug = params?.slug as string
  const { slug, content, frontMatter } = await getArticle(params?.slug as string)

  if (slug !== pageSlug || !content) {
    return {
      notFound: true,
    }
  }

  const article = await renderToString(content, {
    components: mdxComponents,
    mdxOptions: {
      remarkPlugins: [
        require('remark-slug'),
        require('remark-code-titles'),
        require('remark-toc'),
        require('remark-external-links'),
      ],
      rehypePlugins: [require('rehype-autolink-headings'), require('mdx-prism')],
      compilers: [],
    },
    scope: {},
  })

  return {
    props: {
      article,
      frontMatter,
      preview,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: fs.readdirSync(path.join(cwd, 'services/content/articles')).map((p) => ({
      params: {
        slug: p.replace(/\.mdx?/, ''),
      },
    })),
    fallback: 'blocking',
  }
}

const Article = ({ article, frontMatter, preview }: Props) => {
  const router = useRouter()

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

export default Article
