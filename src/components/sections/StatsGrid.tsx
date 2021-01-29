import { Stack, Container, Box, Flex, Text, Heading, SimpleGrid, useTheme } from '@chakra-ui/react'

const StatsText = ({ children }) => {
  const theme = useTheme()

  return (
    <Text as="span" fontWeight={700} color={theme.colors.brand.primary}>
      {children}
    </Text>
  )
}

const stats = [
  {
    title: 'React',
    content: (
      <>
        The choice frontend framework of developers for building <StatsText>powerful</StatsText> sites for the modern
        web.
      </>
    ),
  },
  {
    title: 'TypeScript',
    content: (
      <>
        <StatsText>Analytics</StatsText> enabled right in your dashboard without history limitations
      </>
    ),
  },
  {
    title: '13%',
    content: (
      <>
        <StatsText>Farms</StatsText> in North America has chosen NewLife™ as their management solution
      </>
    ),
  },
  {
    title: '250M+',
    content: (
      <>
        <StatsText>Plants</StatsText> currently connected and monitored by the NewLife™ software
      </>
    ),
  },
]

function StatsGrid() {
  return (
    <Box bg="gray.800" position="relative">
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        backgroundImage="url('/templates/stats-grid-with-image.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position="absolute"
        width="50%"
        insetY={0}
        right={0}
      >
        <Flex bgGradient="linear(to-r, gray.800 10%, transparent)" w="full" h="full" />
      </Flex>
      <Container maxW="7xl" zIndex={10} position="relative">
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack flex={1} color="gray.400" justify={{ lg: 'center' }} py={{ base: 4, md: 20, xl: 60 }}>
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily="heading"
                fontWeight={700}
                textTransform="uppercase"
                mb={3}
                fontSize="xl"
                color="gray.500"
              >
                Technologies
              </Text>
              <Heading color="white" mb={5} fontSize={{ base: '3xl', md: '5xl' }}>
                All the good shit.
              </Heading>
              <Text fontSize="xl" color="gray.400">
                The NewLife™ technology allows you to monitor your crops and get complete insights at real time. The
                proprietary software/hardware ecosystem prevents your plants from getting neglected.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text fontFamily="heading" fontSize="3xl" color="white" mb={3}>
                    {stat.title}
                  </Text>
                  <Text fontSize="xl" color="gray.400">
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  )
}

export default StatsGrid