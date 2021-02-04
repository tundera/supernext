import type { Player } from 'db'

import { useQuery, UseQueryOptions } from 'react-query'

import { getAllPlayers } from '@lib/graphql/players'

export function usePlayersQuery(options?: UseQueryOptions<Player[], Error>) {
  const queryOptions = { ...options }

  return useQuery<Player[], Error>('players', getAllPlayers, queryOptions)
}
