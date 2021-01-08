import type { FC } from 'react'

import Head from 'next/head'
import { Flex, Container } from '@chakra-ui/react'

type Props = {
  title: string
}

const BlogLayout: FC<Props> = ({ title, children }) => {
  return (
    <Flex bg="gray.50" minHeight="100vh" alignItems="center" justifyContent="center">
      <Head>
        <meta charSet="utf-8" />
        <title>{`${process.env.NEXT_PUBLIC_SITE_NAME} | Blog` ?? 'Chakra Base | Blog'}</title>
      </Head>
      <Container>{children}</Container>
    </Flex>
  )
}

export default BlogLayout
