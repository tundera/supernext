import type { SimpleGridProps } from '@chakra-ui/react'
import type { Player } from 'db'

import { Box, Link, Text, Stack, Flex, SimpleGrid, Heading } from '@chakra-ui/react'

type Props = SimpleGridProps & {
  players: Player[]
}

const TeamRoster = ({ players, ...props }: Props) => {
  return (
    <SimpleGrid columns={[1, 1, 2]} spacing={8} {...props}>
      {players.map((player) => (
        <Box
          key={player.id}
          as={Link}
          href={player.slug}
          display="block"
          p={6}
          rounded="md"
          bg="gray.900"
          color="white"
          _hover={{
            textDecoration: 'none',
            transform: 'translateY(-5px)',
          }}
        >
          <Stack spacing={4} h="full">
            <Heading as="h3" size="md" fontWeight="500" color="brandGreen.500">
              {player.name}
            </Heading>
            <Text>
              #{player.number} | {player.position}
            </Text>
            <Flex height="full">
              <Flex mt="auto" w="full" alignItems="center" justifyContent="space-between">
                <Text fontWeight="600" display="inline-flex" alignSelf="flex-end">
                  See stats on ESPN
                </Text>
              </Flex>
            </Flex>
          </Stack>
        </Box>
      ))}
    </SimpleGrid>
  )
}

export default TeamRoster
