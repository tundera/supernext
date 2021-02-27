import type { FC } from 'react'

// import NextLink from 'next/link'

import { useColorModeValue, Stack, Heading, Text, Box, Flex } from '@chakra-ui/react'

interface Props {
  stats: any[]
}

const CountryStats: FC<Props> = ({ stats }) => {
  const bg = useColorModeValue('gray.800', 'white')
  const color = useColorModeValue('white', 'gray.800')

  return (
    <Flex as="article" bg={bg} color={color} w="full">
      <Heading as="h2" fontSize="3xl">
        Country Stats
      </Heading>
      <Stack spacing="2">
        {stats.map((stat, index) => (
          <Box key={`${stat.country}-${index}`}>
            <br />
            <Text as="b">{stat.country}</Text>
            <br />
            Cases: {stat.cases} | Today: {stat.todayCases} | Active: {stat.active} <br />
            Deaths: {stat.deaths} | Recovered: {stat.recovered} | Critical: {stat.critical}
          </Box>
        ))}
      </Stack>
    </Flex>
  )
}

export default CountryStats

export type { Props as CountryStatsProps }
