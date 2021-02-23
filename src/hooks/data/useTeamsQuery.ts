import type { Team } from 'db'

import { useQuery, UseQueryOptions } from 'react-query'

import { getAllTeams } from '@lib/graphql/teams'

export function useTeamsQuery(options?: UseQueryOptions<Team[], Error>) {
  const queryOptions = { ...options }

  return useQuery<Team[], Error>('teams', getAllTeams, queryOptions)
}
