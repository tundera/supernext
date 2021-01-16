import type { NextPage, GetStaticProps } from 'next'

import Head from 'next/head'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { renderMetaTags } from 'react-datocms'
import { Heading, Stack, SimpleGrid } from '@chakra-ui/react'

import PageLayout from '@layouts/PageLayout'
import TeamCard from '@components/TeamCard'
import { useTeams } from '@hooks/react-query/useTeams'
import { getAllTeams } from '@lib/nexus/teams'
import { getPageSeo } from '@lib/datocms/seo'

type Props = {
  metaTags?: any
}

const title = 'Teams'

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('teams', getAllTeams)

  const data = await getPageSeo(title)
  const metaTags = data.page.seo.concat(data.site.favicon)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      metaTags,
    },
  }
}

const TeamsPage: NextPage<Props> = ({ metaTags }) => {
  const { data: teams } = useTeams()

  return (
    <div>
      <Head>{renderMetaTags(metaTags)}</Head>
      <PageLayout>
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
    </div>
  )
}

export default TeamsPage
