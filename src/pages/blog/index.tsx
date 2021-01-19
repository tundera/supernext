/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage, GetStaticProps } from 'next'
import type { SanityPage } from 'types/sanity'

import NextLink from 'next/link'
import { Box, Heading, Text, List, ListItem, ListIcon } from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'

import { getAllPages } from '@lib/sanity/pages'

type Props = { pages: SanityPage[] }

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAllPages()

  console.dir(data, { colors: true, depth: null })

  const pages = data?.map((page) => ({
    title: page.title,
    slug: page.slug.current,
  }))

  return {
    props: { pages },
  }
}

const BlogPage: NextPage<Props> = ({ pages }) => {
  return (
    <Box>
      <Heading>This Site Loads MDX From Sanity.io</Heading>
      <Text>View any of these pages to see it in action:</Text>
      <List spacing={3}>
        {pages?.map(({ title, slug }) => (
          <ListItem key={title}>
            <ListIcon as={MdCheckCircle} color="green.500" />
            <NextLink href={`/blog/${slug}`}>
              <a>{title}</a>
            </NextLink>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default BlogPage
