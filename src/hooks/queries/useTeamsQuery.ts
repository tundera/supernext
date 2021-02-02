import type { Team } from 'services/nexus/types'

import { useQuery, UseQueryOptions } from 'react-query'

import { getAllTeams } from '@lib/nexus/teams'

export function useTeamsQuery(options?: UseQueryOptions<Team[], Error>) {
  const queryOptions = { ...options }

  return useQuery<Team[], Error>('teams', getAllTeams, queryOptions)
}
