import { FC } from 'react'

import { Box, Heading } from '@chakra-ui/react'

import { usePlayers } from '@hooks/usePlayers'
import Suspense from 'src/components/utility/QuerySuspense'
import LoadingSpinner from 'src/components/utility/LoadingSpinner'

type Props = {
  title: string
}

// TODO: Convert this use SuspenseList once stable
const PlayersList: FC<Props> = ({ title }) => {
  const { data: players } = usePlayers()

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