import type { CustomNextPage as NextPage } from 'types'

import { Box, Flex, Heading, Text } from '@chakra-ui/react'
// import { useQuery } from 'react-query'

import { getLayout } from '@components/layouts/SiteLayout'
// import { getData } from '@lib/data'

const TailwindPage: NextPage = () => {
  // const { data, isLoading, isError, error } = useQuery('key', getData)

  return (
    <>
      <Flex flexDir="column" alignItems="center">
        <Heading as="h1" py="10">
          Tailwind Page
        </Heading>
        <Box w="full">
          <Text>Testing tailwind components</Text>
        </Box>
      </Flex>
    </>
  )
}

TailwindPage.getLayout = getLayout

export default TailwindPage
