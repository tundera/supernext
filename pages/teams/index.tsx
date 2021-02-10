import type { NextPage, GetStaticProps } from 'next'

import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { Flex, Heading } from '@chakra-ui/react'

import SiteLayout from '@components/layouts/SiteLayout'
import TeamsGrid from '@components/ui/lists/TeamsList'
import { getAllTeams } from '@lib/graphql/teams'
import client from '@lib/graphql/client'
import { useTeamsQuery } from 'src/graphql/generated'

type Props = {
  preview: boolean
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('Teams', getAllTeams)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      preview,
    },
    revalidate: 1,
  }
}

const TeamsPage: NextPage<Props> = ({ preview }) => {
  const { data } = useTeamsQuery(client)

  return (
    <>
      <SiteLayout preview={preview}>
        <Flex flexDir="column" alignItems="center">
          <Heading as="h1" size="xl" py={8} textAlign="center">
            Teams
          </Heading>
          {data && <TeamsGrid teams={data.teams} />}
        </Flex>
      </SiteLayout>
    </>
  )
}

export default TeamsPage
