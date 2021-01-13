import type { NextPage, GetStaticProps /* , GetServerSideProps */ } from 'next'
// import type { NexusGenObjects } from '@lib/graphql/generated/nexus-typegen'

import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { Box, Heading, Stack, SimpleGrid } from '@chakra-ui/react'
// import { request } from 'graphql-request'
// import gql from 'graphql-tag'

import PageLayout from '@layouts/PageLayout'
import { getAllTeams, useTeams } from '@hooks/queries/useTeams'

// type Props = {
//   teams: NexusGenObjects['Team'][]
// }

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('teams', getAllTeams)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const query = gql`
//     {
//       allTeams {
//         id
//         name
//       }
//     }
//   `

//   const data = await request(`${process.env.NEXT_PUBLIC_SITE_URL}/api/graphql`, query)
//   const { allTeams } = data
//   return {
//     props: {
//       teams: allTeams,
//     },
//   }
// }

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
