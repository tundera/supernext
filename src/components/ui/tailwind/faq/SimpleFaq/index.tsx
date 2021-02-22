import type { FC } from 'react'

import { Heading, Text, Box, List, ListItem } from '@chakra-ui/react'

const SimpleFaq: FC = () => {
  return (
    <Box mx="auto" p="8" maxW="container.xl">
      <Heading
        as="h2"
        fontSize="3xl"
        fontWeight="extrabold"
        lineHeight="9"
        borderBottomWidth="2px"
        borderColor="gray.100"
        color="gray.900"
        mb="12"
      >
        FAQs
      </Heading>
      <List display="flex" alignItems="start" gridGap="8" flexWrap="wrap">
        <ListItem w="40%">
          <Text color="gray.900" fontSize="lg" fontWeight="medium" lineHeight="6">
            What is a home energy rating?
          </Text>
          <Text mt="2">
            <Text color="gray.500" lineHeight="6" fontSize="md">
              A home energy rating is an estimated calculation into a homes potential energy usage, which will determine
              the amount of heating and cooling required to make its occupants comfortable. It produces a star rating
              dependant on the amount of heating and cooling loads which will be required, from 0 to 10 stars.
            </Text>
          </Text>
        </ListItem>
        <ListItem w="40%">
          <Text color="gray.900" fontSize="lg" fontWeight="medium" lineHeight="6">
            Why do I need a 6 Star energy rating?
          </Text>
          <Text mt="2">
            <Text color="gray.500" lineHeight="6" fontSize="md">
              In most Australian states the government requires that all new homes and apartments (along with certain
              types of building extensions) built since 2010 be energy rated and achieve a minimum of 6 Stars.
            </Text>
          </Text>
        </ListItem>
        <ListItem w="40%">
          <Text color="gray.900" fontSize="lg" fontWeight="medium" lineHeight="6">
            What is the general cost of an energy rating?
          </Text>
          <Text mt="2">
            <Text color="gray.500" lineHeight="6" fontSize="md">
              Simple energy rating prices vary greatly on the size and type of building, generally an energy rating will
              cost somewhere between $130 to $700+.
            </Text>
          </Text>
        </ListItem>
        <ListItem w="40%">
          <Text color="gray.900" fontSize="lg" fontWeight="medium" lineHeight="6">
            What information do I need to supply for an energy rating to be completed??
          </Text>
          <Text mt="2">
            <Text color="gray.500" lineHeight="6" fontSize="md">
              The information required to complete a full and comprehensive energy report are the following final
              working drawings: Site Plan, Floor Plan, Elevations, Sections, Lighting layout and window schedule
              (including sizes of the existing windows).
            </Text>
          </Text>
        </ListItem>
        <ListItem w="40%">
          <Text color="gray.900" fontSize="lg" fontWeight="medium" lineHeight="6">
            Does building an extension need an energy rating?
          </Text>
          <Text mt="2">
            <Text color="gray.500" lineHeight="6" fontSize="md">
              Depended on the size of the extension you are building there is a chance that it too will need to be
              energy rated. It&#x27;s always best to check first before going ahead with construction.
            </Text>
          </Text>
        </ListItem>
        <ListItem w="40%">
          <Text color="gray.900" fontSize="lg" fontWeight="medium" lineHeight="6">
            What is the general cost of an energy rating?
          </Text>
          <Text mt="2">
            <Text color="gray.500" lineHeight="6" fontSize="md">
              Depended on the size of the extension you are building there is a chance that it too will need to be
              energy rated. It&#x27;s always best to check first before going ahead with construction.
            </Text>
          </Text>
        </ListItem>
      </List>
    </Box>
  )
}

export default SimpleFaq
