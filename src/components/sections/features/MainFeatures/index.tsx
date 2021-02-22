import type { FC } from 'react'

import { chakra, Heading, Box, SimpleGrid, Flex, useColorModeValue } from '@chakra-ui/react'

import FeatureSummary from '@components/sections/features/MainFeatures/FeatureSummary'
import ReactLogo from 'assets/images/logos/react.svg'
import NodeJsLogo from 'assets/images/logos/nodejs.svg'
import TypeScriptLogo from 'assets/images/logos/typescript.svg'
import GraphQlLogo from 'assets/images/logos/graphql.svg'

const MainFeatures: FC = () => {
  const color = useColorModeValue('gray.800', 'whiteAlpha.900')

  return (
    <Flex p={{ sm: 20 }} width="auto" direction="column" justifyContent="center" alignItems="center">
      <Box textAlign="center">
        <Heading
          as="h3"
          mt={2}
          fontSize={{ base: '4xl', sm: '5xl' }}
          lineHeight="8"
          fontWeight="extrabold"
          letterSpacing="tight"
          color={color}
        >
          My Tech Stack
        </Heading>
        <chakra.p mt={4} maxW="2xl" fontSize="xl" mx={{ lg: 'auto' }} color={useColorModeValue('gray.500', 'gray.400')}>
          The best of what&apos;s around.
        </chakra.p>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} px={{ base: 4, lg: 16, xl: 24 }} py={10} mx="auto">
        <FeatureSummary title="React" icon={ReactLogo}>
          Learn the makings of beautiful user interfaces with libraries like Chakra UI and Tailwind, all while cutting
          down development time by wrting your own custom component generators.
        </FeatureSummary>

        <FeatureSummary title="Node.js" icon={NodeJsLogo}>
          Build services as deployable functions to providers like Vercel and Netlify without having to learn another
          language. Welcome to the serverless era.
        </FeatureSummary>

        <FeatureSummary title="GraphQL" icon={GraphQlLogo}>
          Fetch data for your apps with syntax that actually makes sense. Stop trying to parse apart complex API calls
          in your code and focus on your content instead. Integrate flawlessly with SQL and CMS data layers and
          subscribe to real-time data streams to create powerful user experiences.
        </FeatureSummary>
        <FeatureSummary title="TypeScript" icon={TypeScriptLogo}>
          Add type safety to your stack and never look back. Learn how to leverage TypeScript in development for faster
          iteration and boost your confidence when shipping your apps to production.
        </FeatureSummary>
      </SimpleGrid>
    </Flex>
  )
}

export default MainFeatures
