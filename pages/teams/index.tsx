import type { InferGetStaticPropsType } from 'next'

import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { Stack, Heading, SimpleGrid } from '@chakra-ui/react'

import PageLayout from '@components/layouts/PageLayout'
import TeamCard from '@components/TeamCard'
import QuerySuspense from '@components/utility/QuerySuspense'
import { getAllTeams } from '@lib/nexus/teams'
import { useTeamsQuery } from '@hooks/queries/useTeamsQuery'
import LoadingSpinner from '@components/utility/LoadingSpinner'
import PlayersList from '@components/ui/compound/PlayersList'

export const getStaticProps = async ({ preview = false }) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('teams', getAllTeams)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      preview,
    },
    revalidate: 1,
  }
}

const Teams = ({ preview }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data } = useTeamsQuery({ suspense: false })

  return (
    <>
      <PageLayout preview={preview}>
        <Stack>
          <Heading as="h1" size="xl" py={8} textAlign="center">
            Teams
          </Heading>
          <SimpleGrid minChildWidth="120px" spacing="40px" mb={8}>
            {data?.map((team) => {
              return <TeamCard key={team.name} name={team.name} logo={team.logo} />
            })}
            <QuerySuspense fallback={<LoadingSpinner />}>
              <PlayersList title="NBA Players" />
            </QuerySuspense>
          </SimpleGrid>
        </Stack>
      </PageLayout>
    </>
  )
}

export default Teams
