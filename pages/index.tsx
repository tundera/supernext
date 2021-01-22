import type { NextPage } from 'next'

import dynamic from 'next/dynamic'
import { Heading, Stack } from '@chakra-ui/react'

import PageLayout from '@layouts/PageLayout'

type Props = {
  preview: boolean
}

const BouncingEmoji = dynamic(() => import('@components/BouncingEmoji'), {
  ssr: true,
})

const HomePage: NextPage<Props> = ({ preview = false }) => {
  return (
    <>
      <PageLayout preview={preview}>
        <Stack>
          <Heading as="h1" size="xl" py={8} textAlign="center">
            Next Goat
          </Heading>
          <BouncingEmoji label="Bouncing basketball emoji" symbol="🏀" />
        </Stack>
      </PageLayout>
    </>
  )
}

export default HomePage
