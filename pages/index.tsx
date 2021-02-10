import type { NextPage } from 'next'

import { Flex } from '@chakra-ui/react'

import { getLayout } from '@components/layouts/SiteLayout'

import LandingHero from '@components/sections/heros/ScreenshotHero'
import MainFeatures from '@components/sections/features/MainFeatures'

const HomePage: NextPage = () => {
  return (
    <>
      <Flex flexDir="column" alignItems="center">
        <LandingHero />
        <MainFeatures />
      </Flex>
    </>
  )
}

export default HomePage
