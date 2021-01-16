import type { NextPage, GetStaticProps } from 'next'

import NextLink from 'next/link'
import Head from 'next/head'
import { Box, Heading, Stack } from '@chakra-ui/react'
import { renderMetaTags, SeoMetaTagType } from 'react-datocms'

import PlayersList from '@components/PlayersList'
import PageLayout from '@layouts/PageLayout'
import { getPageSeo } from '@lib/datocms/seo'

type Props = {
  metaTags: SeoMetaTagType[]
  preview: boolean
}

const title = 'About'

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const data = await getPageSeo(title)
  const metaTags = data.page.seo.concat(data.site.favicon)

  return {
    props: {
      metaTags,
      preview,
    },
  }
}

const AboutPage: NextPage<Props> = ({ metaTags, preview }) => {
  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <PageLayout preview={preview}>
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
    </>
  )
}

export default AboutPage
