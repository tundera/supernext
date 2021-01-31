import type { InferGetStaticPropsType } from 'next'

import { getAllTeams } from '@lib/nexus/teams'
import { Stack, Heading, SimpleGrid } from '@chakra-ui/react'

import PageLayout from '@components/layouts/PageLayout'
import TeamCard from '@components/TeamCard'
import { useTeamsQuery } from '@hooks/queries/useTeamsQuery'

export const getStaticProps = async ({ preview = false }) => {
  const teams = await getAllTeams()

  return {
    props: {
      teams,
      preview,
    },
    revalidate: 1,
  }
}
const Teams = ({ teams, preview }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data } = useTeamsQuery({ initialData: teams })

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
