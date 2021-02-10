import type { NextPage } from 'next'

import { Flex } from '@chakra-ui/react'

import PageLayout from '@components/layouts/PageLayout'
import Features from '@components/sections/features/CourseFeatures'

import LandingHero from '@components/sections/heros/ScreenshotHero'
import NewsletterSignup from '@components/sections/heros/NewsletterSignup'

const About: NextPage = () => {
  return (
    <>
      <PageLayout>
        <NewsletterSignup />
        <Flex flexDir="column" alignItems="center">
          <LandingHero />
        </Flex>
        <Features />
      </PageLayout>
    </>
  )
}

export default About
