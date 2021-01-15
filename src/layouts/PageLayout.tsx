import type { FC } from 'react'

import Head from 'next/head'
import { renderMetaTags } from 'react-datocms'

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
        <title>{`${process.env.NEXT_PUBLIC_SITE_NAME} | ${title}`}</title>
        <meta charSet="utf-8" />
      </Head>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default PageLayout
