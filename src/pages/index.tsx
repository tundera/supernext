import type { NextPage, GetStaticProps } from 'next'

import Head from 'next/head'
import dynamic from 'next/dynamic'
import { renderMetaTags, SeoMetaTagType } from 'react-datocms'
import { Heading, Stack } from '@chakra-ui/react'

import PageLayout from '@layouts/PageLayout'
import { getPageSeo } from '@lib/datocms/seo'

type Props = {
  metaTags: SeoMetaTagType[]
  preview: boolean
}

const title = 'Home'

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

const BouncingEmoji = dynamic(() => import('@components/BouncingEmoji'), {
  ssr: true,
})

const HomePage: NextPage<Props> = ({ metaTags, preview }) => {
  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <PageLayout preview={preview}>
        <Stack>
          <Heading as="h1" size="xl" py={8} textAlign="center">
            Next Goat
          </Heading>
          <BouncingEmoji label="Bouncing goat emoji" symbol="🐐" />
        </Stack>
      </PageLayout>
    </>
  )
}

export default HomePage
