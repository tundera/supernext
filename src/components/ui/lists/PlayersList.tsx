import { Box, Heading } from '@chakra-ui/react'

// import { usePlayersQuery } from '@hooks/queries/usePlayersQuery'
import { usePlayersByTeamQuery } from 'src/graphql/generated'
import client from 'src/lib/graphql/client'
import Suspense from '@components/utility/QuerySuspense'
import LoadingSpinner from '@components/utility/LoadingSpinner'

type Props = {
  teamId: number
  title: string
}

// TODO: Convert this use SuspenseList once stable
const PlayersList = ({ title, teamId }: Props) => {
  const { data } = usePlayersByTeamQuery(client, { id: teamId })

  return (
    <Box bg="purple.100" p={2} borderRadius={8} alignItems="center" justifyContent="center">
      <Heading p={2} my={1}>
        {title}
      </Heading>
      {data?.playersByTeam?.map(
        (player) =>
          player && (
            <Suspense fallback={<LoadingSpinner />}>
              <Box key={player.id} p={5} bg="gray.200" shadow="md" borderRadius={4} height="80px">
                <Heading fontSize="lg" textAlign="center">
                  {player.name}
                </Heading>
              </Box>
            </Suspense>
          ),
      )}
    </Box>
  )
}

export default PlayersList
