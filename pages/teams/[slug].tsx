import type { GetStaticPaths, GetStaticProps } from 'next'

import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { Stack, Heading, SimpleGrid } from '@chakra-ui/react'

import PageLayout from '@components/layouts/PageLayout'
import QuerySuspense from '@components/utility/QuerySuspense'
import { getTeamBySlug, getAllTeams } from '@lib/graphql/teams'
import { useTeamBySlugQuery } from 'src/graphql/generated'
import { GraphQLClient } from 'graphql-request'
import LoadingSpinner from '@components/utility/LoadingSpinner'
import PlayersList from '@components/ui/lists/PlayersList'

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? ''
const client = new GraphQLClient(endpoint)

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
  const pageSlug = params?.slug as string

  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('Team', () => getTeamBySlug(pageSlug))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      slug: pageSlug,
      preview,
    },
    revalidate: 1,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const teams = await getAllTeams()
  const paths = teams.map((team) => `/teams/${team?.slug}`)

  return {
    paths,
    fallback: 'blocking',
  }
}

const TeamPage = ({ slug, preview }) => {
  const { data, isLoading, isError, error } = useTeamBySlugQuery(client, { slug }, { suspense: false })

  if (isError) {
    const { message } = error as Error
    return <span>Error: {message}</span>
  }

  return (
    <>
      <PageLayout preview={preview}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Stack>
            <Heading as="h1" size="xl" py={8} textAlign="center">
              {data?.team?.name}
            </Heading>
            <SimpleGrid minChildWidth="120px" spacing="40px" mb={8}>
              <QuerySuspense fallback={<LoadingSpinner />}>
                <PlayersList title="NBA Players" />
              </QuerySuspense>
            </SimpleGrid>
          </Stack>
        )}
      </PageLayout>
    </>
  )
}

export default TeamPage
