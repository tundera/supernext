import type { CustomNextPage as NextPage } from 'types'

import { Flex, Box } from '@chakra-ui/react'
import { getLayout } from '@components/layouts/SiteLayout'
import LandingCta from '@components/sections/ctas/LandingCta'

const HomePage: NextPage = () => {
  return (
    <>
      <Flex flexDir="column" alignItems="center">
        <Box w="full">
          <LandingCta />
        </Box>
      </Flex>
    </>
  )
}

HomePage.getLayout = getLayout

export default HomePage
