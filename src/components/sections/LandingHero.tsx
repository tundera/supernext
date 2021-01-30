import { Box, Heading, Container, Text, Button, Icon, Stack, useColorModeValue, useTheme } from '@chakra-ui/react'

import Arrow from '@components/ui/ArrowIcon'

function LandingHero() {
  const theme = useTheme()
  const color = useColorModeValue(theme.colors.brand.primary, theme.colors.brand.secondary)
  const altColor = useColorModeValue('black', 'white')

  return (
    <>
      <Container maxW="2xl">
        <Stack as={Box} textAlign="center" spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
          <Heading color={color} fontWeight={600} fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }} lineHeight="110%">
            Learn full-stack web development by building
            <br />
            <Text as="span" color={altColor}>
              real apps.
            </Text>
          </Heading>
          <Text color="gray.500">
            Build your own content while learning skills to get you paid. Dolla dolla bill y'all
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
