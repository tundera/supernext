import type { GetStaticProps } from 'next'
import type { NextPage } from 'types'

import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { Flex, Heading } from '@chakra-ui/react'

import { getLayout } from '@components/layouts/SiteLayout'
import TeamsGrid from '@components/ui/lists/TeamsList'
import { getAllTeams } from '@lib/graphql/teams'
import client from '@lib/graphql/client'
import { useTeamsQuery } from 'src/graphql/generated'

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('Teams', getAllTeams)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 1,
  }
}

const TeamsPage: NextPage = () => {
  const { data } = useTeamsQuery(client)

  return (
    <>
      <Flex flexDir="column" alignItems="center">
        <Heading as="h1" size="xl" py={8} textAlign="center">
          Teams
        </Heading>
        {data && <TeamsGrid teams={data.teams} />}
      </Flex>
    </>
  )
}

TeamsPage.getLayout = getLayout

export default TeamsPage
