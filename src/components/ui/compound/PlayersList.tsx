import { Box, Heading } from '@chakra-ui/react'

import { usePlayersQuery } from '@hooks/usePlayersQuery'
import Suspense from '@components/utility/QuerySuspense'
import LoadingSpinner from '@components/utility/LoadingSpinner'

type Props = {
  title: string
}

// TODO: Convert this use SuspenseList once stable
const PlayersList = ({ title }: Props) => {
  const { data: players } = usePlayersQuery()

  return (
    <Box bg="purple.100" p={2} borderRadius={8} alignItems="center" justifyContent="center">
      <Heading p={2} my={1}>
        {title}
      </Heading>
      {players?.map((player) => (
        <Suspense fallback={<LoadingSpinner />}>
          <Box key={player.slug} p={5} bg="gray.200" shadow="md" borderRadius={4} height="80px">
            <Heading fontSize="lg" textAlign="center">
              {player.name}
            </Heading>
          </Box>
        </Suspense>
      ))}
    </Box>
  )
}

export default PlayersList
