import type { Player } from '@prisma/client'

import { useQuery, UseQueryOptions } from 'react-query'

import { getAllPlayers } from '@lib/nexus/players'

export function usePlayersQuery(options?: UseQueryOptions<Player[], Error>) {
  const queryOptions = { ...options }

  return useQuery<Player[], Error>('players', getAllPlayers, queryOptions)
}
