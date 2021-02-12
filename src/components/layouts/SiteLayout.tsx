import type { FC, ReactNode } from 'react'

import NProgress from 'next-nprogress-emotion'
import { useColorModeValue, Flex } from '@chakra-ui/react'

import SiteHeader from '@components/sections/headers/SiteHeader'
import Footer from '@components/sections/Footer'
import Container from '@components/sections/Container'

const SiteLayout: FC = ({ children, ...props }) => {
  const color = useColorModeValue('whiteAlpha.900', 'brand.500')

  return (
    <Flex direction="column" align="center" flexDirection="column" {...props}>
      <NProgress color={color} options={{ trickleSpeed: 50 }} showAfterMs={300} spinner />
      <SiteHeader />
      <Container>{children}</Container>
      <Footer />
    </Flex>
  )
}

export default SiteLayout

export const getLayout = (page: ReactNode) => <SiteLayout>{page}</SiteLayout>
