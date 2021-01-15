import type { Player } from 'types/nexus'

import { useQuery, UseQueryOptions } from 'react-query'

import { getAllPlayers } from '@lib/nexus/players'

export function usePlayers(options?: UseQueryOptions<Player[], Error>) {
  const queryOptions = { ...options }

  return useQuery<Player[], Error>('players', getAllPlayers, queryOptions)
}
