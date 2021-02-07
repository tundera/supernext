import { Heading, Flex } from '@chakra-ui/react'

import PageLayout from '@components/layouts/PageLayout'
import Features from '@components/sections/features/CourseFeatures'
import Button from '@components/ui/buttons/Button'
import SimpleAlert from '@components/ui/alerts/SimpleAlert'

const Work = () => {
  return (
    <>
      <PageLayout>
        <SimpleAlert type="success" message="Successfully submitted!" />
        <Flex flexDir="column" alignItems="center">
          <Heading as="h1" size="4xl" mt={8} p={2}>
            Work
          </Heading>
          <Features />
          <Button my="32px" size="lg" variant="solid">
            Custom Button
          </Button>
        </Flex>
      </PageLayout>
    </>
  )
}

export default Work
