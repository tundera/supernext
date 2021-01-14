import type { GetStaticProps, NextPage } from 'next'

import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { Heading, Stack } from '@chakra-ui/react'

import PageLayout from '@layouts/PageLayout'
import NewslettersList from '@components/NewslettersList'
import { getNewsletters, useNewsletters } from '@hooks/queries/useNewsletters'

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('newsletters', getNewsletters)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const NewslettersPage: NextPage = () => {
  const { data: newsletters } = useNewsletters()

  return (
    <PageLayout title="Newsletters">
      <Stack spacing={8}>
        <Heading as="h1" size="xl">
          Chakra Base
        </Heading>
        <NewslettersList title="Recent Newsletters" newsletters={newsletters} />
      </Stack>
    </PageLayout>
  )
}

export default NewslettersPage
