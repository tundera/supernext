import Head from 'next/head'
import NextLink from 'next/link'
import { Box, Flex, Heading, Stack } from '@chakra-ui/react'

export default function AboutPage() {
  return (
    <Flex bg="gray.50" minHeight="100vh" alignItems="center" justifyContent="center">
      <Head>
        <meta charSet="utf-8" />
        <title>{process.env.NEXT_PUBLIC_SITE_NAME ?? 'Chakra Base'}</title>
      </Head>

      <Stack>
        <Heading as="h1" size="xl" p={2}>
          About
        </Heading>
        <Box p={4} textAlign="center">
          <NextLink href="/">Home</NextLink>
        </Box>
      </Stack>
    </Flex>
  )
}
