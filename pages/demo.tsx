import type { CustomNextPage as NextPage } from 'types'

import { Flex, Heading } from '@chakra-ui/react'
// import { useQuery } from 'react-query'

import { getLayout } from '@components/layouts/SiteLayout'
// import { getData } from '@lib/data'

import SidebarWithFooter from '@components/ui/tailwind/sidebars/SidebarWithFooter/Alt'
import Sidebar from '@components/ui/tailwind/sidebars/SidebarWithFooter'

const TailwindPage: NextPage = () => {
  // const { data, isLoading, isError, error } = useQuery('key', getData)

  return (
    <>
      <Flex flexDir="column" alignItems="center">
        <Heading as="h1" py="10">
          Tailwind Page
        </Heading>
        <Sidebar />
        <SidebarWithFooter />
      </Flex>
    </>
  )
}

TailwindPage.getLayout = getLayout

export default TailwindPage
