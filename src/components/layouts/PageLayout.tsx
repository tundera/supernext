import { FC, useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import NProgress from 'next-nprogress-emotion'
import { useColorModeValue, Flex } from '@chakra-ui/react'

import Navbar from '@components/sections/Navbar'
import Footer from '@components/sections/Footer'
import Container from '@components/sections/Container'
import PreviewBanner from '@components/sections/PreviewBanner'

type Props = {
  preview?: boolean
}

const PageLayout: FC<Props> = ({ preview = false, children, ...props }) => {
  const router = useRouter()

  const color = useColorModeValue('whiteAlpha.900', 'brand.500')

  const [isBlogRoute, setIsBlogRoute] = useState<boolean>()

  useEffect(() => {
    if (router.pathname === '/blog' || router.pathname === '/blog/[slug]') {
      setIsBlogRoute(true)
    }
  }, [router.pathname])

  return (
    <Flex direction="column" align="center" flexDirection="column" m="0 auto" {...props}>
      <NProgress color={color} options={{ trickleSpeed: 50 }} showAfterMs={300} spinner />
      {process.env.NODE_ENV === 'development' && isBlogRoute && <PreviewBanner preview={preview} />}
      {/* <Header /> */}
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </Flex>
  )
}

export default PageLayout

export type { Props as PageLayoutProps }
