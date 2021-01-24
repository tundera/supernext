import { Heading, Flex } from '@chakra-ui/react'

import PageLayout from '@components/layouts/PageLayout'
import Features from '@components/sections/Features'

const AboutIndex = () => {
  return (
    <>
      <PageLayout>
        <Flex flexDir="column" alignItems="center">
          <Heading as="h1" size="4xl" mt={8} p={2}>
            About
          </Heading>
          <Features />
        </Flex>
      </PageLayout>
    </>
  )
}

export default AboutIndex
