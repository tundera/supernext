import { FC, useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import NProgress from 'next-nprogress-emotion'
import { useTheme, useColorMode } from '@chakra-ui/react'

import Navbar from '@components/sections/Navbar'
import Footer from '@components/sections/Footer'
import Container from '@components/sections/Container'
import PreviewBanner from '@components/sections/PreviewBanner'

type Props = {
  preview?: boolean
}

const PageLayout: FC<Props> = ({ preview = false, children }) => {
  const router = useRouter()

  const theme = useTheme()
  const { colorMode } = useColorMode()

  const [isBlogRoute, setIsBlogRoute] = useState<boolean>()

  useEffect(() => {
    if (router.pathname === '/blog' || router.pathname === '/blog/[slug]') {
      setIsBlogRoute(true)
    }
  }, [router.pathname])

  return (
    <div>
      <NProgress
        color={colorMode === 'dark' ? theme.colors.brand.primary : theme.colors.brand.secondary}
        options={{ trickleSpeed: 50 }}
        showAfterMs={300}
        spinner
      />
      {process.env.NODE_ENV === 'development' && isBlogRoute && <PreviewBanner preview={preview} />}
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </div>
  )
}

export default PageLayout
