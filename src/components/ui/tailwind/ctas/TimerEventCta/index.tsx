import type { FC } from 'react'

import { useColorModeValue, chakra, Heading, Flex, Box } from '@chakra-ui/react'

const TimerEventCta: FC = () => {
  const bg = useColorModeValue('indigo.500', 'gray.800')
  const eyebrowColor = useColorModeValue('indigo.800', 'gray.100')

  return (
    <chakra.section bg={bg} py={{ base: '8', md: '16' }}>
      <Box maxW="5xl" mx="auto" px="5" boxSizing="content-box">
        <Flex align="center" direction={{ base: 'column', md: 'row' }} mx="-5">
          <Box w="full" px="5" mb={{ base: '5', md: '0' }} textAlign={{ base: 'center', md: 'left' }}>
            <Heading
              as="h6"
              color={eyebrowColor}
              textTransform="uppercase"
              fontWeight="semibold"
              fontSize={{ base: 'xs', md: 'md' }}
            >
              Opening tickets
            </Heading>
            <Heading as="h3" fontWeight="bold" fontSize={{ base: '2xl', md: '4xl' }} color="white">
              Saturday 17
            </Heading>
            <Heading as="h3" fontWeight="bold" fontSize={{ base: 'lg', md: 'xl' }} color="white" lineHeight="shorter">
              @ 10:00 AM
            </Heading>
            <Box mt="4" w={{ base: 'full', md: '44' }}>
              <chakra.button
                type="button"
                py="2"
                px="4"
                w="full"
                rounded="lg"
                shadow="md"
                fontSize="md"
                fontWeight="semibold"
                textAlign="center"
                transitionProperty="background-color, border-color, color, fill, stroke, opacity, box-shadow, transform"
                transitionTimingFunction="ease-in"
                transitionDuration="200ms"
                bg="white"
                color="indigo.500"
                _hover={{ bg: 'gray.100' }}
                sx={{
                  '--tw-ring-opacity': '1',
                  '--tw-ring-color': 'rgba(99, 102, 241, var(--tw-ring-opacity))',
                  '--tw-ring-offset-width': '2px',
                  '--tw-ring-offset-color': '#c7d2fe',
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
                Early bird
              </chakra.button>
            </Box>
          </Box>
          <Box w={{ base: 'full', md: 'auto' }} px="5">
            <Flex justify="center" color="white" textAlign="center">
              <Box w={{ base: '20', md: '24' }} borderWidth="1px" rounded="lg" py={{ base: '3', md: '4' }} mx="2">
                <Box fontSize={{ base: '2xl', md: '3xl' }} fontWeight="semibold">
                  <span>0</span>
                  <span>1</span>
                </Box>
                <Box opacity="0.75" fontSize="xs" mt="3" textTransform="uppercase">
                  Day
                </Box>
              </Box>
              <Box w={{ base: '20', md: '24' }} borderWidth="1px" rounded="lg" mx="2" py={{ base: '3', md: '4' }}>
                <Box fontSize={{ base: '2xl', md: '3xl' }} fontWeight="semibold">
                  <span>1</span>
                  <span>8</span>
                </Box>
                <Box opacity="0.75" fontSize="xs" mt="3" textTransform="uppercase">
                  Hour
                </Box>
              </Box>
              <Box w={{ base: '20', md: '24' }} borderWidth="1px" rounded="lg" mx="2" py={{ base: '3', md: '4' }}>
                <Box fontSize={{ base: '2xl', md: '3xl' }} fontWeight="semibold">
                  <span>5</span>
                  <span>0</span>
                </Box>
                <Box opacity="0.75" fontSize="xs" mt="3" textTransform="uppercase">
                  Min
                </Box>
              </Box>
              <Box w={{ base: '20', md: '24' }} borderWidth="1px" rounded="lg" mx="2" py={{ base: '3', md: '4' }}>
                <Box fontSize={{ base: '2xl', sm: '3xl' }} fontWeight="semibold">
                  <span>1</span>
                  <span>9</span>
                </Box>
                <Box opacity="0.75" fontSize="xs" mt="3" textTransform="uppercase">
                  Second
                </Box>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </chakra.section>
  )
}

export default TimerEventCta
