import type { Coach } from 'services/nexus/types'

import { useQuery, UseQueryOptions } from 'react-query'

import { getAllCoaches } from '@lib/nexus/coaches'

export function useCoachesQuery(options?: UseQueryOptions<Coach[], Error>) {
  const queryOptions = { ...options }

  return useQuery<Coach[], Error>('coaches', getAllCoaches, queryOptions)
}
