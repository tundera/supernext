import type { FC } from 'react'

import { chakra, Heading, Flex, Text, Grid, GridItem } from '@chakra-ui/react'

const NumbersBannerCta: FC = () => {
  return (
    <chakra.section bg="indigo.800">
      <Grid
        w="100%"
        maxW={{
          base: '7xl',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        }}
        mx="auto"
        textAlign="center"
        gap="8"
        gridTemplateColumns={{
          base: 'repeat(2, minmax(0, 1fr))',
          md: 'repeat(4, minmax(0, 1fr))',
        }}
      >
        <GridItem>
          <Heading as="h5" fontSize="5xl" fontWeight="bold" color="white">
            <chakra.span display="inline" color="white">
              2179
            </chakra.span>
            <chakra.span color="indigo.200">+</chakra.span>
          </Heading>
          <Text color="indigo.100" letterSpacing="wide" fontSize="xs" fontWeight="medium" textTransform="uppercase">
            Cups of coffee
          </Text>
        </GridItem>
        <GridItem>
          <Heading as="h5" fontSize="5xl" fontWeight="bold" color="white">
            <chakra.span display="inline" color="white">
              13
            </chakra.span>
            <chakra.span color="indigo.200">+</chakra.span>
          </Heading>
          <Text color="indigo.100" letterSpacing="wide" fontSize="xs" fontWeight="medium" textTransform="uppercase">
            Ongoing contracts
          </Text>
        </GridItem>
        <GridItem>
          <Heading as="h5" fontSize="5xl" fontWeight="bold" color="white">
            <chakra.span display="inline" color="white">
              31
            </chakra.span>
            <chakra.span color="indigo.200">+</chakra.span>
          </Heading>
          <Text color="indigo.100" letterSpacing="wide" fontSize="xs" fontWeight="medium" textTransform="uppercase">
            Finished projects
          </Text>
        </GridItem>
        <GridItem>
          <Heading as="h5" fontSize="5xl" fontWeight="bold" color="white">
            <chakra.span display="inline" color="white">
              3
            </chakra.span>
            <chakra.span color="indigo.200">+</chakra.span>
          </Heading>
          <Text color="indigo.100" letterSpacing="wide" fontSize="xs" fontWeight="medium" textTransform="uppercase">
            Years in business
          </Text>
        </GridItem>
      </Grid>
      <Flex w="52" mx="auto" mt="4" p="4">
        <chakra.button
          type="button"
          w="full"
          py="2"
          px="4"
          bg="white"
          color="indigo.500"
          rounded="lg"
          shadow="md"
          fontSize="md"
          fontWeight="semibold"
          textAlign="center"
          transitionProperty="background-color, border-color, color, fill, stroke, opacity, box-shadow, transform"
          transitionTimingFunction="ease-in"
          transitionDuration="200ms"
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
          Join
        </chakra.button>
      </Flex>
    </chakra.section>
  )
}

export default NumbersBannerCta
