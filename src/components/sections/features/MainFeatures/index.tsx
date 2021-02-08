import { chakra, Box, SimpleGrid, Flex, useColorModeValue } from '@chakra-ui/react'

import FeatureSummary from '@components/sections/features/MainFeatures/FeatureSummary'
import ReactLogo from 'assets/images/logos/react.svg'
import NodeJsLogo from 'assets/images/logos/nodejs.svg'
import TypeScriptLogo from 'assets/images/logos/typescript.svg'
import GraphQlLogo from 'assets/images/logos/graphql.svg'

function MainFeatures() {
  return (
    <Flex bg="brand.500" p={{ sm: 20 }} width="auto" justifyContent="center" alignItems="center">
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={20}
        px={{ base: 4, lg: 16, xl: 24 }}
        py={20}
        mx="auto"
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow="xl"
      >
        <FeatureSummary title="Everything in TypeScript" icon={TypeScriptLogo}>
          Love it or hate it, TypeScript is definitely here to stay. Chances are you've worked in TypeScript to some
          degree, but aren't totally confident you're doing it well. In this course you'll gain that confidence and
          learn to write your frontend and backend with next-level type safety.
        </FeatureSummary>
        <FeatureSummary title="React for Frontend" icon={ReactLogo}>
          Manage all your online and offline sales in one place with a single integration, simplifying reporting and
          reconciliation. Terminal works seamlessly with Payments, Connect, and Billing.
        </FeatureSummary>

        <FeatureSummary title="Node.js for Serverless" icon={NodeJsLogo}>
          Build services as deployable functions to providers like Vercel and Netlify without having to learn another
          language. Welcome to the serverless era, it's here to stay.
        </FeatureSummary>

        <FeatureSummary title="GraphQL" icon={GraphQlLogo}>
          Add in-person payments to your platform or marketplace. Using Terminal with Connect, you can onboard users for
          online and in-person payments, and unify their payouts across channels.
        </FeatureSummary>
      </SimpleGrid>
    </Flex>
  )
}

export default MainFeatures
