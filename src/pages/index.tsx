import type { NextPage, GetStaticProps } from 'next'

import Head from 'next/head'
import dynamic from 'next/dynamic'
import { renderMetaTags, renderMetaTagsToString, SeoMetaTagType } from 'react-datocms'
import { Code, Heading, Stack } from '@chakra-ui/react'

import PageLayout from '@layouts/PageLayout'
import { getPageSeo } from '@lib/datocms/seo'

type Props = {
  metaTags: SeoMetaTagType[]
}

const title = 'Home'

export const getStaticProps: GetStaticProps = async () => {
  const data = await getPageSeo(title)
  const metaTags = data.page.seo.concat(data.site.favicon)

  return {
    props: {
      metaTags,
    },
  }
}

const BouncingEmoji = dynamic(() => import('@components/BouncingEmoji'), {
  ssr: true,
})

const HomePage: NextPage<Props> = ({ metaTags }) => {
  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <Code
        background="#f5f5f5"
        borderRadius="3px"
        padding="25px"
        overflow="auto"
        fontSize="11px"
        mb="8em"
        fontFamily="'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace"
      >
        Look at all these juicy meta tags! ↴
        <br />
        <br />
        {renderMetaTagsToString(metaTags)}
      </Code>
      <PageLayout>
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
