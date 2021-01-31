import type { InferGetStaticPropsType } from 'next'

import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { Stack, Heading, SimpleGrid } from '@chakra-ui/react'

import PageLayout from '@components/layouts/PageLayout'
import TeamCard from '@components/TeamCard'
import { getAllTeams } from '@lib/nexus/teams'
import { useTeamsQuery } from '@hooks/queries/useTeamsQuery'

export const getStaticProps = async ({ preview = false }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  })

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
  const { data } = useTeamsQuery()

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
          </SimpleGrid>
        </Stack>
      </PageLayout>
    </>
  )
}

export default Teams
