import Head from 'next/head'
import { Flex, useTheme } from '@chakra-ui/react'

import Overview from '@components/sections/Overview'
import PageLayout from '@components/layouts/PageLayout'
import CallToActionWithAnnotation from '@components/sections/LandingHero'

import { features } from 'src/utils/constants'
import StatsGrid from '@components/sections/StatsGrid'

const Home = () => {
  const theme = useTheme()

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <PageLayout>
        <Flex flexDir="column" alignItems="center">
          <CallToActionWithAnnotation />
          <Flex maxW={theme.sizes.width} direction="column" align="center" justify="center">
            <StatsGrid />
          </Flex>
          <Overview features={features} />
        </Flex>
      </PageLayout>
    </>
  )
}

export default Home
