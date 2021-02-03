import type { InferGetStaticPropsType } from 'next'

import { SuspenseList } from 'react/unstable-shared-subset'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { Stack, Heading, SimpleGrid } from '@chakra-ui/react'

import PageLayout from '@components/layouts/PageLayout'
import TeamsList from '@components/ui/lists/TeamsList'
import QuerySuspense from '@components/utility/QuerySuspense'
import { getAllTeams } from '@lib/nexus/teams'
import { useTeamsQuery } from 'src/graphql/generated'
import { GraphQLClient } from 'graphql-request'
import LoadingSpinner from '@components/utility/LoadingSpinner'
import PlayersList from '@components/ui/lists/PlayersList'

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? ''
const client = new GraphQLClient(endpoint)

export const getStaticProps = async ({ preview = false }) => {
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

const TeamPage = ({ preview }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data } = useTeamsQuery(client, undefined, { suspense: false })

  return (
    <>
      <PageLayout preview={preview}>
        <Stack>
          <Heading as="h1" size="xl" py={8} textAlign="center">
            Teams
          </Heading>
          <SimpleGrid minChildWidth="120px" spacing="40px" mb={8}>
            {data && <TeamsList teams={data.teams} />}
            <QuerySuspense fallback={<LoadingSpinner />}>
              <PlayersList title="NBA Players" />
            </QuerySuspense>
          </SimpleGrid>
        </Stack>
      </PageLayout>
    </>
  )
}

export default TeamPage
