import { Heading, Flex } from '@chakra-ui/react'

import PageLayout from '@components/layouts/PageLayout'
import Features from '@components/sections/Features'
import Button from '@components/ui/buttons/Button'
import SuccessAlert from '@components/ui/SuccessAlert'

const Work = () => {
  return (
    <>
      <PageLayout>
        <SuccessAlert />
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
