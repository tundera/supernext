import type { CustomNextPage as NextPage } from 'types'

import { Flex } from '@chakra-ui/react'

import { getLayout } from '@components/layouts/SiteLayout'
import Features from '@components/sections/features/CourseFeatures'

import ScreenshotHero from '@components/sections/heros/ScreenshotHero'
import NewsletterSignup from '@components/sections/heros/NewsletterSignup'

const AboutPage: NextPage = () => {
  return (
    <>
      <Flex flexDir="column" alignItems="center">
        <NewsletterSignup />
        <ScreenshotHero />
      </Flex>
      <Features />
    </>
  )
}

AboutPage.getLayout = getLayout

export default AboutPage
