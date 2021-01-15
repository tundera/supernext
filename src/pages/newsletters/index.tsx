import type { GetStaticProps, NextPage } from 'next'
import type { Newsletter } from 'types/content'

import { Heading, Stack } from '@chakra-ui/react'

import PageLayout from '@layouts/PageLayout'
import NewslettersList from '@components/NewslettersList'
import { getNewsletters } from '@lib/local/getNewsletters'

type Props = {
  newsletters: Newsletter[]
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getNewsletters()

  return {
    props: {
      posts,
    },
  }
}

const NewslettersPage: NextPage<Props> = ({ newsletters }) => {
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
