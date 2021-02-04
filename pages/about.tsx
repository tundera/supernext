import { useState, useEffect } from 'react'
import { Heading, Flex, Text } from '@chakra-ui/react'

import PageLayout from '@components/layouts/PageLayout'
import Features from '@components/sections/Features'
import Button from '@components/ui/buttons/Button'

function useRandomNumber() {
  const [number, setNumber] = useState<number>()

  useEffect(() => {
    fetch('/api/nest/randomNumber')
      .then((response) => response.text())
      .then((text) => setNumber(+text))
  }, [])

  return number
}

const About = () => {
  const number = useRandomNumber()

  return (
    <>
      <PageLayout>
        <Flex flexDir="column" alignItems="center">
          <Heading as="h1" size="4xl" mt={8} p={2}>
            About
          </Heading>
          <Text>Random number: {number} </Text>
          <Features />
          <Button my="32px" size="lg" variant="solid">
            Custom Button
          </Button>
        </Flex>
      </PageLayout>
    </>
  )
}

export default About
