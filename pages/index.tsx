import type { CustomNextPage as NextPage } from 'types'

import { Flex } from '@chakra-ui/react'
import { getLayout } from '@components/layouts/SiteLayout'
import MainFeatures from '@components/sections/features/MainFeatures'

const HomePage: NextPage = () => {
  return (
    <>
      <Flex flexDir="column" alignItems="center">
        <MainFeatures />
      </Flex>
    </>
  )
}

HomePage.getLayout = getLayout

export default HomePage
