import type { GetStaticPaths, GetStaticProps } from 'next'
import type { CustomNextPage as NextPage } from 'types'

import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { Flex, Heading, SimpleGrid } from '@chakra-ui/react'

import { getLayout } from '@components/layouts/SiteLayout'
import { getTeamBySlug, getAllTeams } from '@lib/graphql/teams'
import { useTeamBySlugQuery } from 'src/graphql/generated'
import { GraphQLClient } from 'graphql-request'
import LoadingSpinner from '@components/utility/suspense/LoadingSpinner'
import PlayersList from '@components/ui/lists/PlayersList'

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? ''
const client = new GraphQLClient(endpoint)

interface Props {
  slug: string
  preview: boolean
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pageSlug = params?.slug as string

  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('Team', () => getTeamBySlug(pageSlug))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      slug: pageSlug,
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

const TeamPage: NextPage<Props> = ({ slug, preview }) => {
  const { data, isLoading, isError, error } = useTeamBySlugQuery(client, { slug })

  if (isError) {
    const { message } = error as Error
    return <span>Error: {message}</span>
  }

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Flex flexDir="column" alignItems="center">
          <Heading as="h1" size="xl" py={8} textAlign="center">
            {data?.team?.name}
          </Heading>
          <SimpleGrid minChildWidth="120px" spacing="40px" mb={8}>
            <PlayersList players={data?.team?.players ?? []} />
          </SimpleGrid>
        </Flex>
      )}
    </>
  )
}

TeamPage.getLayout = getLayout

export default TeamPage
