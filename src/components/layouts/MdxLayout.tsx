import type { FC, ReactNode } from 'react'

import { Flex, Container } from '@chakra-ui/react'

import { getLayout as getSiteLayout } from '@components/layouts/SiteLayout'

const MdxLayout: FC = ({ children }) => {
  return (
    <Flex bg="gray.400" alignItems="center" justifyContent="center">
      <Container>{children}</Container>
    </Flex>
  )
}

export default MdxLayout

export const getMdxLayout = (page: ReactNode) => getSiteLayout(<MdxLayout>{page}</MdxLayout>)
