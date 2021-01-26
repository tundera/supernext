import type { FC } from 'react'

import { Box, Text, List, ListItem, ListIcon, SimpleGrid } from '@chakra-ui/react'
import { MdDone } from 'react-icons/md'

import SectionHeadline from '@components/ui/SectionHeadline'

type Feature = {
  category: string
  items: string[]
}

type Props = {
  features: Feature[]
}

const Overview: FC<Props> = ({ features }) => {
  return (
    <Box bg="gray.900" p={8} rounded="md">
      <SectionHeadline size="lg" as="h3">
        Product Features
      </SectionHeadline>
      <Text fontSize="lg" mb={6}>
        Tell your audience what they gain from your product below.
      </Text>
      <SimpleGrid columns={[1, 2, 4]} spacing={10}>
        {features.map((feature) => (
          <Box key={feature.category}>
            <Text fontWeight="bold" mb={2}>
              {feature.category}
            </Text>
            <List>
              {feature.items.map((item) => (
                <ListItem key={item}>
                  <ListIcon as={MdDone} color="green.400" />
                  {item}
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Overview
