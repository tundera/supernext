import Head from 'next/head'
import { Flex } from '@chakra-ui/react'

import PageLayout from '@components/layouts/PageLayout'

import NewsletterHero from '@components/sections/heros/NewsletterSignup'
import FeatureSummaries from '@components/sections/features/MainFeatures'

const Home = () => {
  return (
    <>
      <PageLayout>
        <Flex flexDir="column" alignItems="center">
          <NewsletterHero />
          <FeatureSummaries />
        </Flex>
      </PageLayout>
    </>
  )
}

export default Home
