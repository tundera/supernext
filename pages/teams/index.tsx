import type { NextPage, GetStaticProps } from 'next'
import type { Team } from 'src/services/nexus/types'

import { Heading, Stack, SimpleGrid } from '@chakra-ui/react'

import PageLayout from 'src/components/layouts/PageLayout'
import TeamCard from 'src/components/TeamCard'
import { useTeamsQuery } from '@hooks/useTeamsQuery'
import { getAllTeams } from '@lib/nexus/teams'

type Props = {
  teams: Team[]
  preview: boolean
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const teams = await getAllTeams()

  return {
    props: {
      teams,
      preview,
    },
  }
}

const TeamsPage: NextPage<Props> = ({ teams, preview }) => {
  const { data } = useTeamsQuery({ initialData: teams })

  return (
    <>
      <PageLayout preview={preview}>
        <Stack>
          <Heading as="h1" size="xl" py={8} textAlign="center">
            Teams
          </Heading>
          <SimpleGrid minChildWidth="120px" spacing="40px" mb={8}>
            {data?.map((team) => (
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
