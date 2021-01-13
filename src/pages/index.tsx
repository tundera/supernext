import type { NextPage } from 'next'

import dynamic from 'next/dynamic'

import { Heading, Stack } from '@chakra-ui/react'
import PageLayout from '@layouts/PageLayout'

const BouncingEmoji = dynamic(() => import('@components/BouncingEmoji'), {
  ssr: true,
})

const IndexPage: NextPage = () => {
  return (
    <PageLayout title="Home">
      <Stack>
        <Heading as="h1" size="xl" py={8} textAlign="center">
          Next Goat
        </Heading>
        <BouncingEmoji label="Bouncing goat emoji" symbol="🐐" />
      </Stack>
    </PageLayout>
  )
}

export default IndexPage
