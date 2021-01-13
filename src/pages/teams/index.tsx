import type { NextPage, GetServerSideProps } from 'next'

import { Box, Heading, Stack, SimpleGrid } from '@chakra-ui/react'
import { request } from 'graphql-request'
import gql from 'graphql-tag'
import { NexusGenObjects } from '@lib/graphql/generated/nexus-typegen'
import PageLayout from '@layouts/PageLayout'

type Props = {
  teams: NexusGenObjects['Team'][]
}

export const getServerSideProps: GetServerSideProps = async () => {
  const query = gql`
    {
      allTeams {
        id
        name
      }
    }
  `

  const data = await request(`${process.env.NEXT_PUBLIC_SITE_URL}/api/graphql`, query)
  const { allTeams } = data
  return {
    props: {
      teams: allTeams,
    },
  }
}

const TeamsPage: NextPage<Props> = ({ teams }) => {
  return (
    <PageLayout title="Home">
      <Stack>
        <Heading as="h1" size="xl" py={8} textAlign="center">
          Teams
        </Heading>
        <SimpleGrid minChildWidth="120px" spacing="40px" mb={8}>
          {teams.map((team) => (
            <Box p={5} bg="gray.200" shadow="md" borderRadius={4} height="80px">
              <Heading fontSize="lg" textAlign="center">
                {team.name}
              </Heading>
            </Box>
          ))}
        </SimpleGrid>
      </Stack>
    </PageLayout>
  )
}

export default TeamsPage
