import { Box, Heading } from '@chakra-ui/react'

// import { usePlayersQuery } from '@hooks/queries/usePlayersQuery'
import { usePlayersByTeamQuery } from 'src/graphql/generated'
import client from 'src/lib/graphql/client'
import Suspense from '@components/utility/suspense/QuerySuspense'

import LoadingSpinner from '@components/utility/suspense/LoadingSpinner'

type Props = {
  teamId: number
  title: string
}

// TODO: Convert this use SuspenseList once stable
const PlayersList = ({ title, teamId }: Props) => {
  const { data, isLoading, isError, error } = usePlayersByTeamQuery(client, { id: teamId }, { suspense: false })

  if (isError) {
    const { message } = error as Error
    return <span>Error: {message}</span>
  }

  return (
    <Box bg="purple.100" p={2} borderRadius={8} alignItems="center" justifyContent="center">
      <Heading p={2} my={1}>
        {title}
      </Heading>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        data?.playersByTeam?.map((player) => (
          <Box key={player?.id} p={5} bg="gray.200" shadow="md" borderRadius={4} height="80px">
            <Heading fontSize="lg" textAlign="center">
              {player?.name}
            </Heading>
          </Box>
        ))
      )}
    </Box>
  )
}

export default PlayersList
