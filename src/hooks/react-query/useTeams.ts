import type { Team } from 'types/nexus'

import { useQuery, UseQueryOptions } from 'react-query'

import { getAllTeams } from '@lib/nexus/teams'

export function useTeams(options?: UseQueryOptions<Team[], Error>) {
  const queryOptions = { ...options }

  return useQuery<Team[], Error>('teams', getAllTeams, queryOptions)
}
