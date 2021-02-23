import type { FC } from 'react'

import { useColorModeValue, chakra, Box, Heading, Flex, Text, Button } from '@chakra-ui/react'

const LandingCta: FC = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('black', 'white')

  return (
    <Box bg={bg}>
      <Box
        textAlign="center"
        w="full"
        mx="auto"
        py={{ base: '12', lg: '16' }}
        px={{ base: '4', sm: '6', lg: '8' }}
        zIndex="20"
      >
        <Heading as="h2" fontSize={{ base: '4xl', sm: '6xl' }} fontWeight="extrabold" color={color}>
          <chakra.span display="block">tundera.dev</chakra.span>
          <chakra.span display="block" fontSize={{ base: '3xl', sm: '4xl' }} color="indigo.500">
            Hi, I&apos;m Philip.
          </chakra.span>
        </Heading>
        <Text fontSize="xl" mt="4" maxW="md" mx="auto" color="gray.400">
          I&apos;m building out this site right now, but feel free to check out out some of the content now. You can
          also see some of my open-source work on GitHub.
        </Text>
        <Flex justify="center" mt={{ lg: '0' }} flexShrink={{ lg: 0 }}>
          <Box mt="12" display="inline-flex" rounded="md" shadow="base">
            <Button
              as="a"
              href="https://github.com/tundera"
              target="_blank"
              rel="noopener noreferrer"
              type="button"
              color="white"
              bg="indigo.600"
              shadow="md"
              transition="ease-in"
              transitionDuration="200ms"
              w="full"
              textAlign="center"
              fontSize="md"
              fontWeight="semibold"
              py="2"
              px="4"
              rounded="lg"
              _hover={{ bg: 'indigo.700' }}
            >
              GitHub Profile
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default LandingCta
