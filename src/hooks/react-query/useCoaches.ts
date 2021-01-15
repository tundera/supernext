import type { Coach } from 'types/nexus'

import { useQuery, UseQueryOptions } from 'react-query'

import { getAllCoaches } from '@lib/nexus/coaches'

export function useCoaches(options?: UseQueryOptions<Coach[], Error>) {
  const queryOptions = { ...options }

  return useQuery<Coach[], Error>('coaches', getAllCoaches, queryOptions)
}
