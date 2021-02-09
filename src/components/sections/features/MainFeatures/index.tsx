import { chakra, SimpleGrid, Flex, useColorModeValue } from '@chakra-ui/react'

import FeatureSummary from '@components/sections/features/MainFeatures/FeatureSummary'
import ReactLogo from 'assets/images/logos/react.svg'
import NodeJsLogo from 'assets/images/logos/nodejs.svg'
import TypeScriptLogo from 'assets/images/logos/typescript.svg'
import GraphQlLogo from 'assets/images/logos/graphql.svg'

function MainFeatures() {
  return (
    <Flex p={{ sm: 20 }} width="auto" direction="column" justifyContent="center" alignItems="center">
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={20}
        px={{ base: 4, lg: 16, xl: 24 }}
        py={20}
        mx="auto"
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow="xl"
      >
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
