import { Stack, Heading } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

import PageLayout from '@components/layouts/PageLayout'

const BouncingEmoji = dynamic(() => import('@components/ui/BouncingEmoji'), {
  ssr: true,
})

const HomeIndex = () => {
  return (
    <>
      <PageLayout>
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

export default HomeIndex
