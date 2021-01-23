import type { NextPage } from 'next'

import { Heading, Flex } from '@chakra-ui/react'

import Features from '@components/sections/Features'
import PageLayout from '@components/layouts/PageLayout'

type Props = {
  preview: boolean
}

const AboutPage: NextPage<Props> = ({ preview = false }) => {
  return (
    <>
      <PageLayout preview={preview}>
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

export default AboutPage
