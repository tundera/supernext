import type { NextPage } from 'next'

import NextLink from 'next/link'
import { Box, Heading, Stack } from '@chakra-ui/react'

import PlayersList from '@components/PlayersList'
import PageLayout from '@layouts/PageLayout'

type Props = {
  preview: boolean
}

const AboutPage: NextPage<Props> = ({ preview = false }) => {
  return (
    <>
      <PageLayout preview={preview}>
        <Stack>
          <Heading as="h1" size="xl" p={2}>
            About
          </Heading>
          <Box p={4} textAlign="center">
            <NextLink href="/">Home</NextLink>
          </Box>
          <PlayersList title="NBA Players" />
        </Stack>
      </PageLayout>
    </>
  )
}

export default AboutPage
