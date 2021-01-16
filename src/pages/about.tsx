import type { NextPage, GetStaticProps } from 'next'

import NextLink from 'next/link'
import Head from 'next/head'
import { Box, Heading, Stack } from '@chakra-ui/react'
import { renderMetaTags } from 'react-datocms'

import PlayersList from '@components/PlayersList'
import PageLayout from '@layouts/PageLayout'
import { getPageSeo } from '@lib/datocms/seo'

type Props = {
  metaTags?: any
}

const title = 'About'

export const getStaticProps: GetStaticProps = async () => {
  const data = await getPageSeo(title)
  const metaTags = data.page.seo.concat(data.site.favicon)

  return {
    props: {
      metaTags,
    },
  }
}

const AboutPage: NextPage<Props> = ({ metaTags }) => {
  return (
    <div>
      <Head>
        <Head>{renderMetaTags(metaTags)}</Head>
      </Head>
      <PageLayout>
        <Stack>
          <Heading as="h1" size="xl" p={2}>
            About
          </Heading>
          <Box p={4} textAlign="center">
            <NextLink href="/">Home</NextLink>
          </Box>
          <PlayersList title="NBA Players" />
        </Stack>
      </PageLayout>
    </div>
  )
}

export default AboutPage
