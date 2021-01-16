import type { GetStaticProps, NextPage } from 'next'
import type { Newsletter } from 'types/content'

import Head from 'next/head'
import { Heading, Stack } from '@chakra-ui/react'
import { renderMetaTags } from 'react-datocms'

import PageLayout from '@layouts/PageLayout'
import NewslettersList from '@components/NewslettersList'
import { getNewsletters } from '@lib/local/getNewsletters'
import { getPageSeo } from '@lib/datocms/seo'

type Props = {
  newsletters: Newsletter[]
  metaTags?: any
}

const title = 'Newsletters'

export const getStaticProps: GetStaticProps = async () => {
  const newsletters = await getNewsletters()

  const data = await getPageSeo(title)
  const metaTags = data.page.seo.concat(data.site.favicon)

  return {
    props: {
      newsletters,
      metaTags,
    },
  }
}

const NewslettersPage: NextPage<Props> = ({ newsletters, metaTags }) => {
  return (
    <div>
      <Head>
        <Head>{renderMetaTags(metaTags)}</Head>
      </Head>
      <PageLayout>
        <Stack spacing={8}>
          <Heading as="h1" size="xl">
            Next Goat News
          </Heading>
          <NewslettersList title="Recent Newsletters" newsletters={newsletters} />
        </Stack>
      </PageLayout>
    </div>
  )
}

export default NewslettersPage
