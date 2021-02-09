import type { NextPage } from 'next'

import { Flex } from '@chakra-ui/react'

import PageLayout from '@components/layouts/PageLayout'

import LandingHero from '@components/sections/heros/ScreenshotHero'
import MainFeatures from '@components/sections/features/MainFeatures'

const HomePage: NextPage = () => {
  return (
    <>
      <PageLayout>
        <Flex flexDir="column" alignItems="center">
          <LandingHero />
          <MainFeatures />
        </Flex>
      </PageLayout>
    </>
  )
}

export default HomePage
