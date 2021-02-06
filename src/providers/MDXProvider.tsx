/* eslint-disable react/display-name */
import { preToCodeBlock } from 'mdx-utils'
import { MDXProvider } from '@mdx-js/react'

import { Text, UnorderedList, ListItem } from '@chakra-ui/react'

import Layout from '@components/layouts/MdxLayout'
import Header from '@components/sections/Header'
import CodeBlock from '@components/ui/CodeBlock'

const components = {
  pre: (preProps) => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <CodeBlock {...props} />
    }
    return <pre {...preProps} />
  },
  h1: ({ children }) => (
    <Text fontSize="2xl" mb={3}>
      {children}
    </Text>
  ),
  h2: ({ children }) => (
    <Text fontSize="xl" my={3}>
      {children}
    </Text>
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
  p: ({ children }) => <Text my={2}>{children}</Text>,
  Header,
  Layout,
}

const CustomMdxProvider = ({ children }) => <MDXProvider components={components}>{children}</MDXProvider>

export default CustomMdxProvider
