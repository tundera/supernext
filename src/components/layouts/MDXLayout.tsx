import type { FC } from 'react'

import { useColorModeValue, Container } from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'

import SiteLayout from '@components/layouts/SiteLayout'
import { mdxComponents } from '@components/mdx'

const MDXLayout: FC = ({ children, ...props }) => {
  return (
    <SiteLayout {...props}>
      <Container maxW="750px">
        <MDXProvider components={mdxComponents}>{children}</MDXProvider>
      </Container>
    </SiteLayout>
  )
}

export default MDXLayout
