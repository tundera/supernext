import type { FC, ReactNode } from 'react'

import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import NProgress from 'next-nprogress-emotion'
import { useColorModeValue, Flex } from '@chakra-ui/react'

import Header from '@components/sections/headers/Header'
import Footer from '@components/sections/Footer'
import Container from '@components/sections/Container'
import PreviewBanner from '@components/sections/PreviewBanner'

type Props = {
  preview?: boolean
}

const SiteLayout: FC<Props> = ({ preview = false, children, ...props }) => {
  const router = useRouter()

  const color = useColorModeValue('whiteAlpha.900', 'brand.500')

  const [isBlogRoute, setIsBlogRoute] = useState<boolean>()

  useEffect(() => {
    if (router.pathname === '/blog' || router.pathname === '/blog/[slug]') {
      setIsBlogRoute(true)
    }
  }, [router.pathname])

  return (
    <Flex direction="column" align="center" flexDirection="column" {...props}>
      <NProgress color={color} options={{ trickleSpeed: 50 }} showAfterMs={300} spinner />
      {process.env.NODE_ENV === 'development' && isBlogRoute && <PreviewBanner preview={preview} />}
      <Header />
      <Container>{children}</Container>
      <Footer />
    </Flex>
  )
}

export default SiteLayout

export type { Props as SiteLayoutProps }

export const getLayout = (page: ReactNode, preview: boolean = false) => (
  <SiteLayout preview={preview}>{page}</SiteLayout>
)
