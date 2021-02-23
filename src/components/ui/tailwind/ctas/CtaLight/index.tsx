import type { FC } from 'react'

import { useColorModeValue, chakra, Box, Heading } from '@chakra-ui/react'

const CtaLight: FC = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const headingColor = useColorModeValue('black', 'white')
  return (
    <Box bg={bg}>
      <Box
        display={{ lg: 'flex' }}
        alignItems={{ lg: 'center' }}
        justifyContent={{ lg: 'space-between' }}
        w="full"
        mx="auto"
        py={{ base: '12', lg: '16' }}
        px={{ base: '4', sm: '6', lg: '8' }}
        zIndex="20"
      >
        <Heading as="h2" color={headingColor} fontSize={{ base: '3xl', sm: '4xl' }} fontWeight="extrabold">
          <chakra.span className="block">Want to be millionaire ?</chakra.span>
          <chakra.span display="block" color="indigo.500">
            It&#x27;s today or never.
          </chakra.span>
        </Heading>
        <Box mt={{ lg: '0' }} flexShrink={{ lg: 0 }}>
          <Box display="inline-flex" rounded="md" shadow="base">
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
    </Box>
  )
}

export default CtaLight
