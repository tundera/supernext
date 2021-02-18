import type { FC } from 'react'

// import NextLink from 'next/link'

import { useColorModeValue, chakra, Heading, Text, Button, Box, Flex, List, ListItem } from '@chakra-ui/react'

const FeaturesWithDesc: FC = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const headingColor = useColorModeValue('currentColor', 'white')
  const listItemColor = useColorModeValue('currentColor', 'white')
  const textColor = useColorModeValue('gray.500', 'gray.300')

  return (
    <section>
      <Box
        bg={bg}
        mx="auto"
        p={{ base: '4', sm: '6', lg: '8' }}
        w="100%"
        maxW={{
          base: '7xl',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        }}
      >
        <Flex flexWrap="wrap" mx="-8">
          <Box w={{ base: 'full', lg: '50%' }} px="8">
            <Box mb={{ base: '12', lg: '0' }} pb={{ base: '12', lg: '0' }} borderBottomWidth={{ base: '1px', lg: '0' }}>
              <Heading as="h2" mb="4" fontSize={{ base: '3xl', lg: '4xl' }} fontWeight="bold" color={headingColor}>
                Sed ac magna sit amet risus tristique interdum, at vel velit in hac habitasse platea dictumst.
              </Heading>
              <Text mb="8" lineHeight="2" textColor={textColor}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi
                risus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula.
                Fusce sit amet dui tellus.
              </Text>
              <Box w={{ base: 'full', md: '33.333333%' }}>
                <Button
                  type="button"
                  py="2"
                  px="4"
                  w="full"
                  shadow="md"
                  textAlign="center"
                  fontSize="md"
                  fontWeight="semibold"
                  transition="ease-in"
                  transitionDuration="200ms"
                  rounded="lg"
                  color="white"
                  bg="indigo.600"
                  _hover={{ bg: 'indigo.700' }}
                  _active={{ bg: 'indigo.700' }}
                  className="focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  See more
                </Button>
              </Box>
            </Box>
          </Box>
          <Box w={{ base: 'full', lg: '50%' }} px="8">
            <List spacing="12">
              <ListItem display="flex" mx="-4">
                <Box px="4">
                  <chakra.span
                    display="flex"
                    w="16"
                    h="16"
                    mx="auto"
                    justifyContent="center"
                    alignItems="center"
                    fontSize="2xl"
                    fontWeight="bold"
                    rounded="full"
                    bg="blue.50"
                    color="blue.600"
                  >
                    1
                  </chakra.span>
                </Box>
                <Box px="4">
                  <Heading as="h3" my="4" fontSize="xl" fontWeight="semibold" color={listItemColor}>
                    Responsive Elements
                  </Heading>
                  <Text color={textColor} lineHeight="2">
                    All elements are responsive and provide the best display in all screen size. It&#x27;s magic !
                  </Text>
                </Box>
              </ListItem>
              <ListItem display="flex" mx="-4">
                <Box p="4">
                  <chakra.span
                    display="flex"
                    w="16"
                    h="16"
                    mx="auto"
                    justifyContent="center"
                    alignItems="center"
                    fontSize="2xl"
                    fontWeight="bold"
                    rounded="full"
                    bg="blue.50"
                    color="blue.600"
                  >
                    2
                  </chakra.span>
                </Box>
                <Box px="4">
                  <Heading as="h3" my="4" fontSize="xl" fontWeight="semibold" color={listItemColor}>
                    Flexible Team
                  </Heading>
                  <Text color={textColor} lineHeight="2">
                    Flexibility is the key. All team is available 24/24 and joinable every day on our hotline.
                  </Text>
                </Box>
              </ListItem>
              <ListItem display="flex" mx="-4">
                <Box px="4">
                  <chakra.span
                    display="flex"
                    w="16"
                    h="16"
                    mx="auto"
                    justifyContent="center"
                    alignItems="center"
                    fontSize="2xl"
                    fontWeight="bold"
                    rounded="full"
                    bg="blue.50"
                    color="blue.600"
                  >
                    3
                  </chakra.span>
                </Box>
                <Box px="4">
                  <Heading as="h3" my="4" fontSize="xl" fontWeight="semibold" color={listItemColor}>
                    Ecologic Software
                  </Heading>
                  <Text color={textColor} lineHeight="2">
                    Our Software are ecologic and responsable. Green is not just a color, it&#x27;s a way of life.
                  </Text>
                </Box>
              </ListItem>
            </List>
          </Box>
        </Flex>
      </Box>
    </section>
  )
}

export default FeaturesWithDesc
