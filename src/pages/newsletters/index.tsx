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
  const newsletters = await getNewsletters()

  return {
    props: {
      newsletters,
    },
  }
}

const NewslettersPage: NextPage<Props> = ({ newsletters }) => {
  return (
    <PageLayout>
      <Stack spacing={8}>
        <Heading as="h1" size="xl">
          Next Goat News
        </Heading>
        <NewslettersList title="Recent Newsletters" newsletters={newsletters} />
      </Stack>
    </PageLayout>
  )
}

export default NewslettersPage
