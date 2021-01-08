import Head from 'next/head'
import NextLink from 'next/link'
import { Box, Flex, Heading, Stack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

const BouncingEmoji = dynamic(() => import('@components/BouncingEmoji'), {
  ssr: true,
})

export default function IndexPage() {
  return (
    <Flex bg="gray.50" minHeight="100vh" alignItems="center" justifyContent="center">
      <Head>
        <meta charSet="utf-8" />
        <title>{process.env.NEXT_PUBLIC_SITE_NAME ?? 'Chakra Base'}</title>
      </Head>

      <Stack>
        <BouncingEmoji label="Bouncing goat emoji" symbol="🐐" />
        <Heading as="h1" size="xl" p={2}>
          Next Goat
        </Heading>
        <Box p={4} textAlign="center">
          <NextLink href="/blog">Blog</NextLink>
        </Box>
      </Stack>
    </Flex>
  )
}
