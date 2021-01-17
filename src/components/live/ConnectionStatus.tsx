import type { FC } from 'react'
import type { QuerySubscriptionStatus } from 'types/datocms'

import { Text } from '@chakra-ui/react'

type Props = {
  status: QuerySubscriptionStatus
}

const ConnectionStatus: FC<Props> = ({ status }) => {
  const statusMessage = {
    connecting: 'Connecting to DatoCMS...',
    connected: 'Connected to DatoCMS, receiving live updates!',
    closed: 'Connection closed',
  }

  return <Text alignContent="center">Connection status: {statusMessage[status]}</Text>
}

export default ConnectionStatus
