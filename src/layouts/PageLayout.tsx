import type { FC } from 'react'

import Head from 'next/head'

import Navbar from '@components/Navbar'
import Container from '@layouts/Container'
import Footer from '@components/Footer'

const PageLayout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default PageLayout
