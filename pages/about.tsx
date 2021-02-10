import type { NextPage } from 'next'

import { Flex } from '@chakra-ui/react'

import SiteLayout from '@components/layouts/SiteLayout'
import Features from '@components/sections/features/CourseFeatures'

import LandingHero from '@components/sections/heros/ScreenshotHero'
import NewsletterSignup from '@components/sections/heros/NewsletterSignup'

const About: NextPage = () => {
  return (
    <>
      <SiteLayout>
        <NewsletterSignup />
        <Flex flexDir="column" alignItems="center">
          <LandingHero />
        </Flex>
        <Features />
      </SiteLayout>
    </>
  )
}

export default About
