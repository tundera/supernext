import type { FC } from 'react'

import { useColorModeValue, Icon, Heading, Text, Box, Flex } from '@chakra-ui/react'

const EditIcon = (props) => (
  <Icon viewBox="0 0 1792 1792" {...props}>
    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
  </Icon>
)

const FeaturesWithBorder: FC = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const headerColor = useColorModeValue('gray.900', 'white')
  const subheaderColor = useColorModeValue('currentColor', 'white')
  const textColor = useColorModeValue('gray.500', 'gray.200')

  return (
    <Box
      bg={bg}
      px="6"
      py="6"
      mx="auto"
      w="100%"
      maxW={{
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      }}
    >
      <Box mb="16" textAlign="center">
        <Heading
          as="h2"
          fontSize="md"
          color="indigo.600"
          fontWeight="semibold"
          letterSpacing="wide"
          textTransform="uppercase"
        >
          Features
        </Heading>
        <Text
          mt="2"
          fontSize={{ base: '3xl', sm: '4xl' }}
          lineHeight="8"
          fontWeight="extrabold"
          letterSpacing="tight"
          color={headerColor}
        >
          A better way to live
        </Text>
      </Box>
      <Flex flexWrap="wrap" my="12" color={subheaderColor}>
        <Box
          w={{ base: 'full', md: '50%', lg: '33.333333%' }}
          borderBottomWidth="1px"
          borderRightWidth={{ md: '1px' }}
          p="8"
        >
          <Flex align="center" mb="6">
            <EditIcon w="6" h="6" fill="indigo.500" />
            <Box ml="4" fontSize="xl">
              Increase sales
            </Box>
          </Flex>
          <Text lineHeight="2" fontSize="md" color={textColor}>
            Receive more sales by selling across multple sales channels instead of just having a single point of entry.
          </Text>
        </Box>
        <Box
          w={{ base: 'full', md: '50%', lg: '33.333333%' }}
          borderBottomWidth="1px"
          borderRightWidth={{ lg: '1px' }}
          p="8"
        >
          <Flex align="center" mb="6">
            <EditIcon w="6" h="6" fill="indigo.500" />
            <Box ml="4" fontSize="xl">
              Overlays
            </Box>
          </Flex>
          <Text lineHeight="2" fontSize="md" color={textColor}>
            Apply beautiful overlays to every product image distributed through our platform. A visual touch.
          </Text>
        </Box>
        <Box
          w={{ base: 'full', md: '50%', lg: '33.333333%' }}
          borderBottomWidth="1px"
          borderRightWidth={{ md: '1px', lg: '0' }}
          p="8"
        >
          <Flex align="center" mb="6">
            <EditIcon w="6" h="6" fill="indigo.500" />
            <Box ml="4" fontSize="xl">
              Control
            </Box>
          </Flex>
          <Text lineHeight="2" fontSize="md" color={textColor}>
            Apply filters and control which products to sell on each sales channel. E.g. exclude products with low
            margins.
          </Text>
        </Box>
        <Box
          w={{ base: 'full', md: '50%', lg: '33.333333%' }}
          borderBottomWidth={{ base: '1px', lg: '0' }}
          borderRightWidth={{ lg: '1px' }}
          p="8"
        >
          <Flex align="center" mb="6">
            <EditIcon w="6" h="6" fill="indigo.500" />
            <Box ml="4" fontSize="xl">
              Mapping
            </Box>
          </Flex>
          <Text lineHeight="2" fontSize="md" color={textColor}>
            Map product categories with each sales channels&#x27; own categories and achieve better results and lower
            costs.
          </Text>
        </Box>
        <Box
          w={{ base: 'full', md: '50%', lg: '33.333333%' }}
          borderBottomWidth={{ base: '1px', md: '0' }}
          borderRightWidth={{ md: '1px', lg: '0' }}
          p="8"
        >
          <Flex align="center" mb="6">
            <EditIcon w="6" h="6" fill="indigo.500" />
            <Box ml="4" fontSize="xl">
              Fill the missing
            </Box>
          </Flex>
          <Text lineHeight="2" fontSize="md" color={textColor}>
            Modify products with extra properties and achieve the maximum output for each installed sales channel.
          </Text>
        </Box>
        <Box w={{ base: 'full', md: '50%', lg: '33.333333%' }} p="8">
          <Flex align="center" mb="6">
            <EditIcon w="6" h="6" fill="indigo.500" />
            <Box ml="4" fontSize="xl">
              Dynamic Texts
            </Box>
          </Flex>
          <Text lineHeight="2" fontSize="md" color={textColor}>
            Build unique product titles and descriptions instead of spending days manually editing each product.
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default FeaturesWithBorder
