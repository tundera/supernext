/* eslint-disable react/display-name */
import { preToCodeBlock } from 'mdx-utils'

import { Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react'

import Layout from '@components/layouts/MdxLayout'
import Header from '@components/sections/headers/SiteHeader'
import CodeBlock from '@components/ui/snippets/CodeBlock'

export const mdxComponents = {
  pre: (preProps) => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <CodeBlock {...props} />
    }
    return <pre {...preProps} />
  },
  h1: ({ children }) => (
    <Heading as="h1" fontSize="2xl" mb={3} color="spark.400">
      {children}
    </Heading>
  ),
  h2: ({ children }) => (
    <Heading as="h2" fontSize="xl" my={3} color="green">
      {children}
    </Heading>
  ),
  h3: ({ children }) => (
    <Text fontSize="md" my={3}>
      {children}
    </Text>
  ),
  h4: ({ children }) => (
    <Text fontSize="sm" my={3}>
      {children}
    </Text>
  ),
  ul: ({ children }) => <UnorderedList my={2}>{children}</UnorderedList>,
  li: ({ children }) => <ListItem>{children}</ListItem>,
  p: ({ children }) => (
    <Text my={2} color="rebeccapurple" fontWeight="bold">
      {children}
    </Text>
  ),
  Header,
  Layout,
}
