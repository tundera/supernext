import type { CustomNextPage as NextPage } from 'types'

import { Flex, Heading } from '@chakra-ui/react'
// import { useQuery } from 'react-query'

import { getLayout } from '@components/layouts/SiteLayout'
// import { getData } from '@lib/data'

import FeaturesWithDesc from '@components/ui/tailwind/features/FeaturesWithDesc'

const TailwindPage: NextPage = () => {
  // const { data, isLoading, isError, error } = useQuery('key', getData)

  return (
    <>
      <Flex flexDir="column" alignItems="center">
        <Heading as="h1" py="10">
          Tailwind Page
        </Heading>
        <FeaturesWithDesc />
      </Flex>
    </>
  )
}

TailwindPage.getLayout = getLayout

export default TailwindPage
