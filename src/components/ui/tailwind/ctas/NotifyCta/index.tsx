import type { FC } from 'react'

import { useColorModeValue, chakra, Heading, Box, Text } from '@chakra-ui/react'

const NotifyCta: FC = () => {
  const bg = useColorModeValue('purple.700', 'gray.800')

  return (
    <Box
      display={{ xl: 'flex' }}
      alignItems={{ xl: 'center' }}
      bg={bg}
      px={{ base: '6', md: '12', lg: '16' }}
      py={{ base: '6', md: '12', lg: '16' }}
      rounded="lg"
    >
      <Box w={{ xl: '0' }} flex={{ xl: '1 1 0%' }}>
        <Heading
          as="h2"
          color="white"
          fontSize={{ base: '2xl', sm: '3xl' }}
          fontWeight="extrabold"
          lineHeight={{ base: '8', sm: '9' }}
          letterSpacing="tight"
        >
          Receive alert about new commit or pull request on your github
        </Heading>
        <Text mt="3" maxW="3xl" fontSize="lg" lineHeight="6" color="indigo.200">
          No account or email required. We use push notifications. You can choose between several modes and define your
          own alert threshold.
        </Text>
      </Box>
      <Box mt={{ base: '8', xl: '0' }} ml={{ xl: '8' }} w={{ sm: 'full' }} maxW={{ sm: 'md' }}>
        <Box mt={{ base: '3', sm: '0' }} rounded="md" ml={{ sm: '3' }} flexShrink={{ sm: 0 }}>
          <chakra.button
            w="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            px="5"
            py="3"
            color="white"
            bg="purple.500"
            borderWidth="1px"
            borderColor="transparent"
            fontSize="md"
            lineHeight="6"
            fontWeight="medium"
            rounded="md"
            transitionProperty="background-color, border-color, color, fill, stroke, opacity, box-shadow, transform"
            transitionTimingFunction="ease-in-out"
            transitionDuration="150ms"
            _hover={{ bg: 'purple.400' }}
            _focus={{ bg: 'purple.400', outline: '2px solid transparent', outlineOffset: '2px' }}
          >
            Notify me
          </chakra.button>
        </Box>
        <Text mt="3" fontSize="sm" lineHeight="5" color="indigo.200">
          We care about the protection of your data. Your data is safe and never used for commercial purposes.
        </Text>
        <Text fontSize="sm" lineHeight="5" color="indigo.200">
          In order to receive the notifications, you must give permission sufficient to your web browser.
        </Text>
      </Box>
    </Box>
  )
}

export default NotifyCta
