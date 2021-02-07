import { Flex } from '@chakra-ui/react'

import PageLayout from '@components/layouts/PageLayout'
import Features from '@components/sections/features/CourseFeatures'

import ScreenshotHero from '@components/sections/heros/ScreenshotHero'

const About = () => {
  return (
    <>
      <PageLayout>
        <Flex flexDir="column" alignItems="center">
          <ScreenshotHero />
        </Flex>
        <Features />
      </PageLayout>
    </>
  )
}

export default About
