/* eslint-disable jsx-a11y/anchor-is-valid */
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import type { MdxRemote } from 'next-mdx-remote/types'
import type { FrontMatter } from 'services/content/types'

import fs from 'fs'
import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import path from 'path'
import { Container, Flex, Box, Heading, Text } from '@chakra-ui/react'
import Emoji from 'a11y-react-emoji'

import LoadingSpinner from 'src/components/utility/LoadingSpinner'
import PageLayout from 'src/components/layouts/PageLayout'
import ArticleLayout from 'src/components/layouts/ArticleLayout'
import NextMdxLink from 'src/components/NextMdxLink'

type Props = {
  content: MdxRemote.Source
  frontMatter: FrontMatter
  preview: boolean
}

const root = process.cwd()

const components = {
  a: NextMdxLink,
  SampleButtons: dynamic(() => import('src/components/ui/buttons/SampleButtons')),
  Flex,
  Box,
  Container,
  Head,
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
  const source = fs.readFileSync(path.join(root, 'services/content', 'articles', `${params?.slug}.mdx`), 'utf8')
  const { data, content } = matter(source)

  const markup = await renderToString(content, {
    components,
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

  if (!data || !markup) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      content: markup,
      frontMatter: data,
      preview,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: fs.readdirSync(path.join(root, 'services/content', 'articles')).map((p) => ({
      params: {
        slug: p.replace(/\.mdx?/, ''),
      },
    })),
    fallback: true,
  }
}

const ArticlePage: NextPage<Props> = ({ content, frontMatter, preview }) => {
  const renderedContent = hydrate(content ?? '', { components })

  const router = useRouter()
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

export default ArticlePage
