import type { FC } from 'react'

import { chakra, Heading, Image, Box, Flex } from '@chakra-ui/react'

const Illustration404: FC = () => {
  return (
    <Box as="main" bg="white" position="relative" overflow="hidden" h="100vh">
      <Flex
        align="center"
        justify="space-between"
        w="100%"
        maxW={{
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        }}
        mx="auto"
        h="100vh"
        pt={{ base: '32', md: '0' }}
        px="6"
        zIndex="10"
      >
        <Flex
          position="relative"
          direction={{ base: 'column-reverse', lg: 'row' }}
          justify="space-between"
          align="center"
          w="100%"
          maxW={{
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
          }}
          mx="auto"
          px="6"
        >
          <Box w="full" mb={{ base: '16', md: '8' }} textAlign={{ base: 'center', lg: 'left' }}>
            <Heading
              as="h1"
              fontWeight="light"
              textAlign={{ base: 'center', lg: 'left' }}
              fontSize={{ base: '5xl', lg: '8xl' }}
              mt={{ base: '12', md: '0' }}
              color="gray.700"
            >
              Sorry, this page isn&#x27;t available
            </Heading>
            <chakra.button
              px="2"
              py="2"
              w="36"
              mt="16"
              transitionProperty="background-color, border-color, color, fill, stroke, opacity, box-shadow, transform"
              transitionTimingFunction="ease-in"
              transitionDuration="200ms"
              borderWidth="2px"
              borderColor="gray.700"
              fontSize="lg"
              bg="yellow.300"
              _hover={{ bg: 'yellow.400' }}
              _focus={{ outline: '2px solid transparent', outlineOffset: '2px' }}
            >
              Go back home
            </chakra.button>
          </Box>
          <Box position="relative" display="block" w="full" maxW={{ base: 'md', lg: '2xl' }} mx="auto" mt={{ md: '0' }}>
            <Image src="/static/images/tailwind/illustrations/1.svg" />
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Illustration404
