import type { Team } from 'src/services/nexus/types'

import { useQuery, UseQueryOptions } from 'react-query'

import { getAllTeams } from '@lib/nexus/teams'

export function useTeams(options?: UseQueryOptions<Team[], Error>) {
  const queryOptions = { ...options }

  return useQuery<Team[], Error>('teams', getAllTeams, queryOptions)
}
