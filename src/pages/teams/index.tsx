import type { NextPage, GetStaticProps } from 'next'

import Head from 'next/head'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { renderMetaTags, SeoMetaTagType } from 'react-datocms'
import { Heading, Stack, SimpleGrid } from '@chakra-ui/react'

import PageLayout from '@layouts/PageLayout'
import TeamCard from '@components/TeamCard'
import { useTeams } from '@hooks/react-query/useTeams'
import { getAllTeams } from '@lib/nexus/teams'
import { getPageSeo } from '@lib/datocms/seo'

type Props = {
  metaTags: SeoMetaTagType[]
  preview: boolean
}

const title = 'Teams'

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('teams', getAllTeams)

  const data = await getPageSeo(title)
  const metaTags = data.page.seo.concat(data.site.favicon)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      metaTags,
      preview,
    },
  }
}

const TeamsPage: NextPage<Props> = ({ metaTags, preview }) => {
  const { data: teams } = useTeams()

  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
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
