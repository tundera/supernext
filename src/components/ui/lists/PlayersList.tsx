import { SimpleGrid, Box, Heading } from '@chakra-ui/react'

const PlayersList = ({ players }) => {
  return (
    <Box bg="whiteAlpha.700" p={2} borderRadius={8} alignItems="center" justifyContent="center">
      <Heading p={2} my={1}>
        Team Roster
      </Heading>
      <SimpleGrid minChildWidth="120px" spacing="40px">
        {players.map((player) => (
          <Box key={player.id} p={5} bg="gray.200" shadow="md" borderRadius={4} height="80px">
            <Heading fontSize="lg" textAlign="center">
              {player.name}
            </Heading>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default PlayersList
