import type { CustomNextPage as NextPage } from 'types'

import { Flex, Heading, Divider } from '@chakra-ui/react'
// import { useQuery } from 'react-query'

import { getLayout } from '@components/layouts/SiteLayout'
// import { getData } from '@lib/data'

import FeaturesWithCards from '@components/ui/tailwind/features/FeaturesWithCards'

const TailwindPage: NextPage = () => {
  // const { data, isLoading, isError, error } = useQuery('key', getData)

  return (
    <>
      <Flex flexDir="column" alignItems="center">
        <Heading as="h1">Tailwind Page</Heading>
        <FeaturesWithCards />
      </Flex>
    </>
  )
}

TailwindPage.getLayout = getLayout

export default TailwindPage
