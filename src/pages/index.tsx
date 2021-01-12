import type { NextPage, GetServerSideProps } from 'next'

import Head from 'next/head'
import NextLink from 'next/link'
import dynamic from 'next/dynamic'

import { Box, Flex, Heading, Stack, List, ListItem, ListIcon } from '@chakra-ui/react'
import { FaRocket } from 'react-icons/fa'
import { request } from 'graphql-request'
import gql from 'graphql-tag'
import { NexusGenObjects } from '@lib/graphql/generated/nexus-typegen'

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

const BouncingEmoji = dynamic(() => import('@components/BouncingEmoji'), {
  ssr: true,
})

const IndexPage: NextPage<Props> = ({ teams }) => {
  return (
    <Flex bg="gray.50" minHeight="100vh" alignItems="center" justifyContent="center">
      <Head>
        <meta charSet="utf-8" />
        <title>{`${process.env.NEXT_PUBLIC_SITE_NAME} | Home` ?? 'Next Goat | Home'}</title>
      </Head>

      <Stack>
        <BouncingEmoji label="Bouncing goat emoji" symbol="🐐" />
        <Heading as="h1" size="xl" p={2}>
          Next Goat
        </Heading>
        <Box p={4} textAlign="center">
          <NextLink href="/blog">Blog</NextLink>
        </Box>
        <List spacing={3}>
          {teams.map((team) => (
            <ListItem key={team.id}>
              <ListIcon as={FaRocket} color="green.400" />
              {team.name}
            </ListItem>
          ))}
        </List>
      </Stack>
    </Flex>
  )
}

export default IndexPage
