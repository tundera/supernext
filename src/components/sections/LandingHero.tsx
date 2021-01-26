import type { FC } from 'react'

import { Box, Heading, Container, Text, Button, Icon, Stack, useColorModeValue, useTheme } from '@chakra-ui/react'

import Arrow from '@components/ui/ArrowIcon'

const LandingHero: FC = () => {
  const theme = useTheme()

  return (
    <>
      <Container maxW="3xl">
        <Stack as={Box} textAlign="center" spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
          <Heading color="gray.200" fontWeight={600} fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }} lineHeight="110%">
            Learn full-stack web development by building
            <br />
            <Text as="span" color={theme.colors.brand.secondary}>
              real apps.
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

export default LandingHero
