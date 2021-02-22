import type { FC } from 'react'

import { chakra, useColorModeValue, Heading, Text, Box, Flex, List, ListItem } from '@chakra-ui/react'

const HorizontalFaq: FC = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('gray.800', 'white')
  return (
    <Box px="4" py="20" bg={bg} color={color}>
      <Flex mx="auto" direction={{ base: 'column', md: 'row' }} maxW="6xl">
        <Heading
          as="h2"
          ml={{ md: '8', lg: '12', xl: '16' }}
          mr="8"
          w={{ base: 'full', md: '33.333333%' }}
          fontSize="3xl"
          fontWeight="extrabold"
          lineHeight="9"
        >
          Frequently-asked questions
        </Heading>
        <chakra.dl w={{ base: 'full', md: '66.666667%' }} mr={{ md: '8', lg: '12', xl: '16' }}>
          <chakra.dt mb="4">
            <Heading as="h3" fontSize="xl" fontWeight="semibold">
              We already have ongoing projects. Will Valohai easily integrate with them?
            </Heading>
          </chakra.dt>
          <chakra.dd mb="16">
            <Text>
              Running existing machine learning projects in Valohai is very simple! Integration only requires adding a
              valohai.yaml configuration file. Moving projects in and out of Valohai is easy – the integration is only
              the configuration file.
            </Text>
          </chakra.dd>
          <chakra.dt mb="4">
            <Heading as="h3" fontSize="xl" fontWeight="semibold">
              How do you compare to other data science platforms?
            </Heading>
          </chakra.dt>
          <chakra.dd mb="16">
            <Text>
              We don’t. Valohai isn’t a data science platform; it&#x27;s a Machine Learning Management Platform that
              handles the whole ML pipeline from feature extraction, to training of your model and to deploying it into
              production in a reproducible manner. Data science platforms offer hosted notebooks and AutoML solutions.
            </Text>
          </chakra.dd>
          <chakra.dt mb="4">
            <Heading as="h3" fontSize="xl" fontWeight="semibold">
              Does Valohai charge for computation?
            </Heading>
          </chakra.dt>
          <chakra.dd mb="16">
            <Text>
              Depends. Most of our customers use their own cloud and thus pay for usage according to their own
              agreements. Valohai doesn&#x27;t charge anything on top of the per-user license fee. If you don&#x27;t
              have a cloud provider, you can use our AWS, GCP and Azure accounts, and we&#x27;ll only charge you for
              what you use.
            </Text>
          </chakra.dd>
        </chakra.dl>
      </Flex>
    </Box>
  )
}

export default HorizontalFaq
