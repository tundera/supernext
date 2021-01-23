import { Stack, Heading, SimpleGrid } from '@chakra-ui/react'

import PageLayout from '@components/layouts/PageLayout'
import TeamCard from '@components/TeamCard'
import { useTeamsData } from '@hooks/useTeamsData'

import { useTeamsQuery } from '@hooks/useTeamsQuery'

const TeamsIndex = () => {
  const { teams, preview } = useTeamsData()
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

TeamsIndex.dataHooks = [useTeamsData]

export default TeamsIndex
