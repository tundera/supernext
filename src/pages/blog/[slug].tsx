/* eslint-disable jsx-a11y/anchor-is-valid */
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import type { MdxRemote } from 'next-mdx-remote/types'

import fs from 'fs'
import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import NextLink from 'next/link'
import path from 'path'
import { Container, Flex, Box, Heading, Text } from '@chakra-ui/react'
import Emoji from 'a11y-react-emoji'

import PageLayout from '@layouts/PageLayout'
import BlogLayout from '@layouts/BlogLayout'
import NextMdxLink from '@components/NextMdxLink'

import { FrontMatter } from 'types/blog'

type Props = {
  mdxSource: MdxRemote.Source
  frontMatter: FrontMatter
}

const root = process.cwd()

const components = {
  a: NextMdxLink,
  SampleButtons: dynamic(() => import('@components/SampleButtons')),
  Flex,
  Box,
  Container,
  Head,
}

const PostPage: NextPage<Props> = ({ mdxSource, frontMatter }) => {
  const content = hydrate(mdxSource, { components })

  return (
    <PageLayout title={`${process.env.NEXT_PUBLIC_SITE_NAME} | ${frontMatter.title}`}>
      <BlogLayout>
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
          <h1>{frontMatter.title}</h1>
          {frontMatter.description && <Text opacity="0.6">{frontMatter.description}</Text>}
        </Box>
        {content}
      </BlogLayout>
    </PageLayout>
  )
}

export default PostPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const source = fs.readFileSync(path.join(root, 'content', 'posts', `${params?.slug}.mdx`), 'utf8')
  const { data, content } = matter(source)

  const mdxSource = await renderToString(content, {
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

  return {
    props: {
      mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: false,
    paths: fs.readdirSync(path.join(root, 'content', 'posts')).map((p) => ({
      params: {
        slug: p.replace(/\.mdx?/, ''),
      },
    })),
  }
}
