import type { FC } from 'react'

import Head from 'next/head'
import { Box, Heading, Container, Text, Button, Stack, Icon, useColorModeValue } from '@chakra-ui/react'

import Arrow from '@components/icons/Arrow'

const CallToActionWithAnnotation: FC = () => {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap" rel="stylesheet" />
      </Head>

      <Container maxW="3xl">
        <Stack as={Box} textAlign="center" spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
          <Heading fontWeight={600} fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }} lineHeight="110%">
            Make money from <br />
            <Text as="span" color="green.400">
              your audience
            </Text>
          </Heading>
          <Text color="gray.500">
            Monetize your content by charging your most loyal readers and reward them loyalty points. Give back to your
            loyal readers by granting them access to your pre-releases and sneak-peaks.
          </Text>
          <Stack direction="column" spacing={3} align="center" alignSelf="center" position="relative">
            <Button
              colorScheme="green"
              bg="green.400"
              rounded="full"
              px={6}
              _hover={{
                bg: 'green.500',
              }}
            >
              Get Started
            </Button>
            <Button variant="link" colorScheme="blue" size="sm">
              Learn more
            </Button>
            <Box>
              <Icon
                as={Arrow}
                color={useColorModeValue('gray.800', 'gray.300')}
                w={71}
                position="absolute"
                right={-71}
                top="10px"
              />
              <Text
                fontSize="lg"
                fontFamily="Caveat"
                position="absolute"
                right="-125px"
                top="-15px"
                transform="rotate(10deg)"
              >
                Starting at $15/mo
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}

export default CallToActionWithAnnotation
