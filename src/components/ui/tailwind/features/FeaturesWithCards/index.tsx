import type { FC } from 'react'

import { useColorModeValue, Icon, Heading, Text, Box, Flex } from '@chakra-ui/react'

const EditIcon = (props) => (
  <Icon viewBox="0 0 1792 1792" {...props}>
    <path
      fill="currentColor"
      d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"
    />
  </Icon>
)

const FeaturesWithCards: FC = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const headerColor = useColorModeValue('gray.700', 'white')
  const textColor = useColorModeValue('gray.500', 'gray.300')

  return (
    <Box
      display={{ sm: 'flex' }}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      gridGap="8"
    >
      <Box w={{ base: 'full', sm: '50%', lg: '25%' }} px="4" py="4" mt="6" bg={bg} shadow="lg" rounded="lg">
        <Box flexShrink={0}>
          <Flex align="center" justify="center" mx="auto" h="12" w="12" rounded="md" bg="indigo.500" color="white">
            <EditIcon h="6" w="6" />
          </Flex>
        </Box>
        <Heading as="h3" color={headerColor} fontSize={{ base: '2xl', sm: 'xl' }} fontWeight="semibold" py="4">
          Website Design
        </Heading>
        <Text fontSize="md" color={textColor} py="4">
          Encompassing today’s website design technology to integrated and build solutions relevant to your business.
        </Text>
      </Box>
      <Box
        w={{ base: 'full', sm: '50%', lg: '25%' }}
        px="4"
        py="4"
        mt={{ base: '6', sm: '16', md: '20', lg: '24' }}
        bg={bg}
        shadow="lg"
        rounded="lg"
      >
        <Box flexShrink={0}>
          <Flex align="center" justify="center" mx="auto" h="12" w="12" rounded="md" bg="indigo.500" color="white">
            <EditIcon h="6" w="6" />
          </Flex>
        </Box>
        <Heading as="h3" color={headerColor} fontSize={{ base: '2xl', sm: 'xl' }} fontWeight="semibold" py="4">
          Branding
        </Heading>
        <Text fontSize="md" color={textColor} py="4">
          Share relevant, engaging, and inspirational brand messages to create a connection with your audience.
        </Text>
      </Box>
      <Box
        w={{ base: 'full', sm: '50%', lg: '25%' }}
        mt={{ base: '6', sm: '16', md: '20', lg: '6' }}
        px="4"
        py="4"
        bg={bg}
        shadow="lg"
        rounded="lg"
      >
        <Box flexShrink={0}>
          <Flex align="center" justify="center" mx="auto" h="12" w="12" rounded="md" bg="indigo.500" color="white">
            <EditIcon h="6" w="6" />
          </Flex>
        </Box>
        <Heading as="h3" color={headerColor} fontSize={{ base: '2xl', sm: 'xl' }} fontWeight="semibold" py="4">
          SEO Marketing
        </Heading>
        <Text fontSize="md" color={textColor} py="4">
          Let us help you level up your search engine game, explore our solutions for digital marketing for your
          business.
        </Text>
      </Box>
    </Box>
  )
}

export default FeaturesWithCards
