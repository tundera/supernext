import type { FC } from 'react'

import { useColorModeValue, chakra, Heading, Flex, Box, Text } from '@chakra-ui/react'

const InfoBannerCta: FC = () => {
  const bg = useColorModeValue('green.500', 'gray.800')

  return (
    <chakra.section
      maxWidth="container.xl"
      mx="auto"
      bg={bg}
      px={{ base: '4', sm: '6', lg: '8' }}
      py={{ base: '12', sm: '16', lg: '20' }}
    >
      <Box maxW="4xl" mx="auto" textAlign="center">
        <Heading
          as="h2"
          fontSize={{ base: '3xl', sm: '4xl' }}
          fontWeight="extrabold"
          lineHeight={{ base: '9', sm: '10' }}
          color="white"
        >
          Used by leading architects, home builders renovators.
        </Heading>
        <Text mt={{ base: '3', sm: '4' }} fontSize="md" lineHeight="7" color="white">
          Feel confident in choosing the best energy assessor for your energy rating.
        </Text>
      </Box>
      <Box
        display={{ sm: 'grid' }}
        gridTemplateColumns={{ sm: 'repeat(3, minmax(0, 1fr))' }}
        gridGap={{ sm: '8' }}
        textAlign="center"
        mt="10"
        mx={{ sm: 'auto' }}
        maxW={{ sm: '3xl' }}
      >
        <Box>
          <Text fontSize="5xl" fontWeight="extrabold" lineHeight="none" color="white">
            119
          </Text>
          <Text mt="2" fontSize="md" fontWeight="medium" lineHeight="6" color="white">
            Energy raters
          </Text>
        </Box>
        <Box mt={{ base: '10', sm: '0' }}>
          <Text fontSize="5xl" fontWeight="extrabold" lineHeight="none" color="white">
            6
          </Text>
          <Text mt="2" fontSize="md" fontWeight="medium" lineHeight="6" color="white">
            Quotes on average
          </Text>
        </Box>
        <Box mt={{ base: '10', sm: '0' }}>
          <Text fontSize="5xl" fontWeight="extrabold" lineHeight="none" color="white">
            24 hours
          </Text>
          <Text mt="2" fontSize="md" fontWeight="medium" lineHeight="6" color="white">
            Average turnaround
          </Text>
        </Box>
      </Box>
      <Flex w="52" mx="auto" mt="4" p="4">
        <chakra.button
          type="button"
          py="2"
          px="4"
          bgGradient="linear(to-r, green.400, green.400)"
          color="white"
          w="full"
          fontSize="md"
          fontWeight="semibold"
          shadow="md"
          textAlign="center"
          transitionProperty="background-color, border-color, color, fill, stroke, opacity, box-shadow, transform"
          transitionTimingFunction="ease-in"
          transitionDuration="200ms"
          sx={{
            '--tw-ring-opacity': '1',
            '--tw-ring-offset-width': '2px',
            '--tw-ring-offset-shadow':
              'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
            '--tw-ring-shadow':
              'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
          }}
          _focus={{
            outlineColor: 'var(--tw-ring-color)',
            outline: '2px solid transparent',
            outlineOffset: '2px',
            boxShadow: 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
          }}
        >
          Buy the kit
        </chakra.button>
      </Flex>
    </chakra.section>
  )
}

export default InfoBannerCta
