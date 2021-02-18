import type { FC } from 'react'

import {
  useColorModeValue,
  chakra,
  Box,
  Flex,
  ListItem,
  List,
  Image,
  Text,
  Grid,
  GridItem,
  Heading,
  Icon,
} from '@chakra-ui/react'

const EditIcon = (props) => (
  <Icon viewBox="0 0 1792 1792" {...props}>
    <path
      fill="currentColor"
      d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"
    />
  </Icon>
)

const FeaturesList: FC = () => {
  const textColor = useColorModeValue('gray.900', 'white')
  const detailColor = useColorModeValue('gray.500', 'gray.300')

  return (
    <List mt="10">
      <ListItem>
        <Flex>
          <Box flexShrink={0}>
            <Flex bg="indigo.500" color="white" justify="center" alignItems="center" h="12" w="12" rounded="md">
              <EditIcon h="6" w="6" />
            </Flex>
          </Box>
          <Box ml="4">
            <Heading as="h5" fontSize="lg" fontWeight="bold" color={textColor} lineHeight="6">
              One-look dashboard
            </Heading>
            <Text mt="2" fontSize="md" color={detailColor} lineHeight="6">
              Know everything about your business in a single glance with your new dashboard.
            </Text>
          </Box>
        </Flex>
      </ListItem>
      <ListItem mt="10">
        <Flex>
          <Box flexShrink={0}>
            <Flex bg="indigo.500" color="white" justify="center" alignItems="center" h="12" w="12" rounded="md">
              <EditIcon h="6" w="6" />
            </Flex>
          </Box>
          <Box ml="4">
            <Heading as="h5" fontSize="lg" fontWeight="bold" color={textColor} lineHeight="6">
              Orders, managed
            </Heading>
            <Text mt="2" fontSize="md" color={detailColor} lineHeight="6">
              All your orders in one place so you can manage your delivery, collection, asap and pre-orders in one
              place.
            </Text>
          </Box>
        </Flex>
      </ListItem>
      <ListItem mt="10">
        <Flex>
          <Box flexShrink={0}>
            <Flex bg="indigo.500" color="white" justify="center" alignItems="center" h="12" w="12" rounded="md">
              <EditIcon h="6" w="6" />
            </Flex>
          </Box>
          <Box ml="4">
            <Heading as="h5" fontSize="lg" fontWeight="bold" color={textColor} lineHeight="6">
              Email &amp; SMS Notifications
            </Heading>
            <Text mt="2" fontSize="md" color={detailColor} lineHeight="6">
              Never miss a new order with notifications via your dashboard, by sound, and to your email and phone.
            </Text>
          </Box>
        </Flex>
      </ListItem>
    </List>
  )
}

export default FeaturesList
