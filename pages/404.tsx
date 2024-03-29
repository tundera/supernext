import type { CustomNextPage as NextPage } from 'types'

import { Flex, Image, Box, Heading, Text, Button } from '@chakra-ui/react'
import Router from 'next/router'

import { getLayout } from '@components/layouts/SiteLayout'

const Error404Page: NextPage = () => {
  const redirectToHome = () => {
    Router.push('/')
  }
  return (
    <>
      <Flex
        flexDirection={['column', 'column', 'row', 'row']}
        justifyContent="center"
        alignItems="center"
        maxW="100%"
        height={['62vh', '65vh', '55vh', '55vh']}
        textAlign={['center', 'center', 'initial', 'initial']}
      >
        <Image w={['300px', '400px', '400px', '500px']} src="/static/images/404.png" />
        <Box>
          <Heading textTransform="uppercase" mb="10px">
            404 - Page Not Found
          </Heading>
          <Text mb="20px">
            The page you are looking for might have been removed had its name changed or is temporarily unavailable.
          </Text>
          <Button onClick={redirectToHome}>Go to Home</Button>
        </Box>
      </Flex>
    </>
  )
}

Error404Page.getLayout = getLayout

export default Error404Page
