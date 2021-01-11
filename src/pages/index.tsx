import Head from 'next/head'
import NextLink from 'next/link'
import dynamic from 'next/dynamic'

import { Box, Flex, Heading, Stack, List, ListItem, ListIcon } from '@chakra-ui/react'
import { FaRocket } from 'react-icons/fa'
import { request, gql } from 'graphql-request'
import { NexusGenObjects } from 'types/generated/nexus-typegen'
import { NextPage } from 'next'

type Props = {
  frameworks: NexusGenObjects['Framework'][]
}
export async function getServerSideProps() {
  const query = gql`
    {
      frameworks {
        id
        name
      }
    }
  `

  const data = await request(`${process.env.NEXT_PUBLIC_SITE_URL}/api/graphql`, query)
  const { frameworks } = data
  return {
    props: {
      frameworks,
    },
  }
}

const BouncingEmoji = dynamic(() => import('@components/BouncingEmoji'), {
  ssr: true,
})

const IndexPage: NextPage<Props> = ({ frameworks }) => {
  return (
    <Flex bg="gray.50" minHeight="100vh" alignItems="center" justifyContent="center">
      <Head>
        <meta charSet="utf-8" />
        <title>{process.env.NEXT_PUBLIC_SITE_NAME ?? 'Chakra Base'}</title>
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
          {frameworks.map((framework) => (
            <ListItem key={framework.id}>
              <ListIcon as={FaRocket} color="green.400" />
              {framework.name}
            </ListItem>
          ))}
        </List>
      </Stack>
    </Flex>
  )
}

export default IndexPage
