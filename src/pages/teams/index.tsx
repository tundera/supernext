import type { NextPage, GetStaticProps } from 'next'

import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { Heading, Stack, SimpleGrid } from '@chakra-ui/react'

import PageLayout from '@layouts/PageLayout'
import { getAllTeams, useTeams } from '@hooks/queries/useTeams'
import TeamCard from '@components/TeamCard'

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('teams', getAllTeams)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const TeamsPage: NextPage = () => {
  const { data: teams } = useTeams()

  return (
    <PageLayout title="Home">
      <Stack>
        <Heading as="h1" size="xl" py={8} textAlign="center">
          Teams
        </Heading>
        <SimpleGrid minChildWidth="120px" spacing="40px" mb={8}>
          {teams?.map((team) => (
            <TeamCard
              key={team.name}
              name={team.name}
              primaryColor={team.primaryColor}
              secondaryColor={team.secondaryColor}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </PageLayout>
  )
}

export default TeamsPage
