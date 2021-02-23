import type { FC } from 'react'

import { useColorModeValue, chakra, Box, Heading, Image, Text } from '@chakra-ui/react'

const CtaWithImageAndDesc: FC = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const headingColor = useColorModeValue('black', 'white')
  return (
    <Box bg={bg} overflow="hidden" position="relative">
      <Box textAlign="start" w="50%" px={{ base: '4', sm: '6', lg: '8' }} py={{ base: '12', lg: '16' }} zIndex="20">
        <Heading as="h2" color={headingColor} fontSize={{ base: '3xl', sm: '4xl' }} fontWeight="extrabold">
          <chakra.span className="block">Want to be millionaire ?</chakra.span>
          <chakra.span display="block" color="indigo.500">
            It&#x27;s today or never.
          </chakra.span>
        </Heading>
        <Text fontSize="xl" mt="4" color="gray.400">
          I had noticed that both in the very poor and very rich extremes of society the mad were often allowed to
          mingle freely
        </Text>
        <Box mt={{ lg: '0' }} flexShrink={{ lg: 0 }}>
          <Box mt="12" display="inline-flex" rounded="md" shadow="base">
            <chakra.button
              type="button"
              w="full"
              py="4"
              px="6"
              bg="indigo.600"
              color="white"
              _hover={{ bg: 'indigo.700' }}
              fontSize="md"
              fontWeight="semibold"
              textAlign="center"
              shadow="md"
              rounded="lg"
              transitionProperty="background-color, border-color, color, fill, stroke, opacity, box-shadow, transform"
              transitionTimingFunction="ease-in"
              transitionDuration="200ms"
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
              Get started
            </chakra.button>
          </Box>
        </Box>
      </Box>
      <Image
        position="absolute"
        h="full"
        maxW="50%"
        display={{ base: 'none', lg: 'block' }}
        right="0"
        top="0"
        src="/static/images/tailwind/object/1.png"
      />
    </Box>
  )
}

export default CtaWithImageAndDesc
