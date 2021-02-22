import type { FC } from 'react'

import {
  useColorModeValue,
  chakra,
  Icon,
  Box,
  Stack,
  Flex,
  Text,
  Image,
  Heading,
  List,
  ListItem,
  HStack,
} from '@chakra-ui/react'

const CheckIcon = (props) => (
  <Icon viewBox="0 0 20 20" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </Icon>
)

const FeaturesWithFourImages: FC = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const headingColor = useColorModeValue('gray.900', 'white')
  const textColor = useColorModeValue('gray.500', 'gray.300')
  const listItemColor = useColorModeValue('gray.500', 'gray.200')
  const iconBg = useColorModeValue('green.100', 'transparent')
  const iconColor = useColorModeValue('green.800', 'green.500')

  return (
    <Box
      position="relative"
      p="4"
      px={{ base: '4', sm: '6', lg: '8' }}
      py="26"
      mt={{ lg: '20' }}
      mx="auto"
      bg={bg}
      maxW="1280px"
    >
      <Box position="relative">
        <Box
          display={{ lg: 'grid' }}
          gridAutoFlow={{ lg: 'row dense' }}
          gridTemplateColumns={{ lg: 'repeat(2, minmax(0, 1fr))' }}
          alignItems={{ lg: 'center' }}
          gridGap={{ lg: '8' }}
        >
          <Box gridColumnStart={{ lg: '2' }} maxW={{ lg: '2xl' }} ml="auto">
            <Text fontSize="md" fontWeight="semibold" textTransform="uppercase" lineHeight="6" color="indigo.500">
              Interactive
            </Text>
            <Heading
              as="h4"
              mt="2"
              color={headingColor}
              fontSize={{ base: '2xl', sm: '3xl' }}
              fontWeight="extrabold"
              lineHeight={{ base: '8', sm: '9' }}
            >
              Interactivity between team members is the key of the success.
            </Heading>
            <Text mt="4" fontSize="lg" lineHeight="6" color={textColor}>
              Build a simply and powered collaborative space for all your team. Track, share, measure, you have a fully
              control, it&#x27;s never be simply and efficient.
            </Text>
            <List mt="8" display={{ md: 'grid' }} gridTemplateColumns={{ md: 'repeat(2, minmax(0, 1fr))' }} gridGap="6">
              <ListItem mt={{ base: '6', lg: '0' }}>
                <Flex>
                  <chakra.span
                    display="flex"
                    height="6"
                    width="6"
                    flexShrink={0}
                    alignItems="center"
                    justifyContent="center"
                    rounded="full"
                    bg={iconBg}
                    color={iconColor}
                  >
                    <CheckIcon w="4" h="4" />
                  </chakra.span>
                  <chakra.span ml="4" fontSize="md" fontWeight="medium" lineHeight="6" color={listItemColor}>
                    Live modifications
                  </chakra.span>
                </Flex>
              </ListItem>
              <ListItem mt={{ base: '6', lg: '0' }}>
                <Flex>
                  <chakra.span
                    display="flex"
                    height="6"
                    width="6"
                    flexShrink={0}
                    alignItems="center"
                    justifyContent="center"
                    rounded="full"
                    bg={iconBg}
                    color={iconColor}
                  >
                    <CheckIcon w="4" h="4" />
                  </chakra.span>
                  <chakra.span ml="4" lineHeight="6" fontSize="md" fontWeight="medium" color={listItemColor}>
                    Data tracker
                  </chakra.span>
                </Flex>
              </ListItem>
              <ListItem mt={{ base: '6', lg: '0' }}>
                <Flex>
                  <chakra.span
                    display="flex"
                    height="6"
                    width="6"
                    flexShrink={0}
                    alignItems="center"
                    justifyContent="center"
                    rounded="full"
                    bg={iconBg}
                    color={iconColor}
                  >
                    <CheckIcon w="4" h="4" />
                  </chakra.span>
                  <chakra.span ml="4" fontSize="md" fontWeight="medium" lineHeight="6" color={listItemColor}>
                    24/24 support
                  </chakra.span>
                </Flex>
              </ListItem>
              <ListItem mt={{ base: '6', lg: '0' }}>
                <Flex>
                  <chakra.span
                    display="flex"
                    height="6"
                    width="6"
                    flexShrink={0}
                    alignItems="center"
                    justifyContent="center"
                    rounded="full"
                    bg={iconBg}
                    color={iconColor}
                  >
                    <CheckIcon w="4" h="4" />
                  </chakra.span>
                  <chakra.span ml="4" fontSize="md" fontWeight="medium" lineHeight="6" color={listItemColor}>
                    Free tips to improve work time
                  </chakra.span>
                </Flex>
              </ListItem>
            </List>
          </Box>
          <Box position="relative" mt={{ base: '10', lg: '0' }} gridColumnStart={{ lg: '1' }} mx={{ lg: '-4' }}>
            <Stack position="relative" spacing="4">
              <HStack display="flex" alignItems="flex-end" justify={{ base: 'center', lg: 'start' }} spacing="4">
                <Image
                  rounded="lg"
                  shadow="lg"
                  w={{ base: '32', md: '56' }}
                  src="/static/images/tailwind/object/8.jpg"
                  alt="1"
                />
                <Image
                  rounded="lg"
                  shadow="lg"
                  w={{ base: '40', md: '64' }}
                  src="/static/images/tailwind/landscape/4.jpg"
                  alt="2"
                />
              </HStack>
              <HStack
                display="flex"
                alignItems="flex-start"
                justifyContent={{ base: 'center', lg: 'start' }}
                spacing="4"
              >
                <Image
                  ml="12"
                  rounded="lg"
                  shadow="lg"
                  w={{ base: '24', md: '40' }}
                  src="/static/images/tailwind/landscape/3.jpg"
                  alt="3"
                />
                <Image
                  rounded="lg"
                  shadow="lg"
                  w={{ base: '32', md: '56' }}
                  src="/static/images/tailwind/object/9.jpg"
                  alt="4"
                />
              </HStack>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default FeaturesWithFourImages
