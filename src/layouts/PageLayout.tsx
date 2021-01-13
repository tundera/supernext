import type { FC } from 'react'

import Head from 'next/head'

import Navbar from '@components/Navbar'
import Container from '@layouts/Container'
import Footer from '@components/Footer'

type Props = {
  title: string
}

const PageLayout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{`${process.env.NEXT_PUBLIC_SITE_NAME} | ${title}`}</title>
      </Head>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default PageLayout
