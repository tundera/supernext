import type { FC } from 'react'

import { Text } from '@chakra-ui/react'

type Props = {
  status: any
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
