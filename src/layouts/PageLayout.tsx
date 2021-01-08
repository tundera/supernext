import type { FC } from 'react'

import Head from 'next/head'
import { Flex } from '@chakra-ui/react'

type Props = {
  title: string
}

const PageLayout: FC<Props> = ({ title, children }) => {
  return (
    <Flex bg="gray.50" minHeight="100vh" alignItems="center" justifyContent="center">
      <Head>
        <meta charSet="utf-8" />
        <title>{`${process.env.NEXT_PUBLIC_SITE_NAME} | ${title}`}</title>
      </Head>
      {children}
    </Flex>
  )
}

export default PageLayout
