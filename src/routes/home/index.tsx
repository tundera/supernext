import Head from 'next/head'
import { Flex, Heading } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

import PageLayout from '@components/layouts/PageLayout'
import CallToActionWithAnnotation from '@components/sections/LandingHero'

const BouncingEmoji = dynamic(() => import('@components/ui/BouncingEmoji'), {
  ssr: true,
})

const HomeIndex = () => {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <PageLayout>
        <Flex flexDir="column" alignItems="center">
          <Heading as="h1" size="xl" py={8} textAlign="center">
            Next Goat
          </Heading>
          <BouncingEmoji label="Bouncing basketball emoji" symbol="🏀" />
          <CallToActionWithAnnotation />
        </Flex>
      </PageLayout>
    </>
  )
}

export default HomeIndex
