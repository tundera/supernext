import type { FC } from 'react'

import { Box, Heading, List, Text, ListItem, ListIcon } from '@chakra-ui/react'
import { MdBookmark } from 'react-icons/md'

import { usePlayers } from '@hooks/queries/usePlayers'

type Props = {
  title: string
}

// TODO: Convert this render to Suspense
const PlayersList: FC<Props> = ({ title }) => {
  const { status, data, error, isFetching } = usePlayers()

  return (
    <Box bg="purple.100" p={2} borderRadius={8} alignItems="center" justifyContent="center">
      <Heading p={2} my={1}>
        {title}
      </Heading>
      <List spacing={3}>
        {status === 'loading' ? (
          'Loading...'
        ) : status === 'error' ? (
          <span>Error: {error?.message}</span>
        ) : (
          <>
            {data?.map((player) => (
              <ListItem key={player.slug}>
                <ListIcon as={MdBookmark} />
                {player.name}
              </ListItem>
            ))}
            <Text>{isFetching ? 'Background Updating...' : ' '}</Text>
          </>
        )}
      </List>
    </Box>
  )
}

export default PlayersList
