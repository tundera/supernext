import type { FC, ReactNode } from 'react'

import { MDXProvider } from '@mdx-js/react'
import { Flex, Container } from '@chakra-ui/react'

import { getLayout as getSiteLayout } from '@components/layouts/SiteLayout'
import { mdxComponents } from '@components/mdx'

const MdxLayout: FC = ({ children }) => {
  return (
    <Flex bg="gray.400" alignItems="center" justifyContent="center">
      <Container>
        <MDXProvider components={mdxComponents}>{children}</MDXProvider>
      </Container>
    </Flex>
  )
}

export default MdxLayout

export const getMdxLayout = (page: ReactNode) => getSiteLayout(<MdxLayout>{page}</MdxLayout>)
