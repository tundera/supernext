/* eslint-disable react/display-name */
import { preToCodeBlock } from 'mdx-utils'
import { Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react'

import Layout from '@components/layouts/MdxLayout'
import Header from '@components/sections/headers/SiteHeader'
import CodeBlock from '@components/ui/snippets/CodeBlock'
import NextMdxLink from '@components/mdx/NextLink'
import ContentHeading from '@components/mdx/ContentHeading'
import SocialLinks from '@components/ui/buttons/SocialLinks'

export const mdxComponents = {
  pre: (preProps) => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <CodeBlock {...props} />
    }
    return <pre {...preProps} />
  },
  h1: (props) => <Heading as="h1" size="xl" my={4} {...props} />,
  h2: (props) => <ContentHeading as="h2" size="lg" fontWeight="bold" {...props} />,
  h3: (props) => <ContentHeading as="h3" size="md" fontWeight="bold" {...props} />,
  h4: (props) => <ContentHeading as="h4" size="sm" fontWeight="bold" {...props} />,
  h5: (props) => <ContentHeading as="h5" size="sm" fontWeight="bold" {...props} />,
  h6: (props) => <ContentHeading as="h6" size="xs" fontWeight="bold" {...props} />,
  ul: ({ children }) => <UnorderedList my={2}>{children}</UnorderedList>,
  li: ({ children }) => <ListItem>{children}</ListItem>,
  p: ({ children }) => (
    <Text my={2} color="rebeccapurple" fontWeight="bold">
      {children}
    </Text>
  ),
  a: (props) => {
    return <NextMdxLink color="whiteAlpha.700" _hover={{ textDecoration: 'underline' }} {...props} />
  },
  Header,
  Layout,
  SocialLinks,
}
