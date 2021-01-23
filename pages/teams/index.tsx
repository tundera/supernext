import type { NextPage, GetStaticProps } from 'next'

import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { Heading, Stack, SimpleGrid } from '@chakra-ui/react'

import PageLayout from '@components/layouts/PageLayout'
import TeamCard from '@components/TeamCard'
import { useTeams } from '@hooks/client/useTeams'
import { getAllTeams } from '@lib/nexus/teams'

type Props = {
  preview: boolean
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('teams', getAllTeams)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      preview,
    },
  }
}

const TeamsPage: NextPage<Props> = ({ preview }) => {
  const { data: teams } = useTeams()

  return (
    <>
      <PageLayout preview={preview}>
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
    </>
  )
}

export default TeamsPage
