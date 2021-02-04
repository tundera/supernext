import type { Coach } from 'db'

import { useQuery, UseQueryOptions } from 'react-query'

import { getAllCoaches } from '@lib/graphql/coaches'

export function useCoachesQuery(options?: UseQueryOptions<Coach[], Error>) {
  const queryOptions = { ...options }

  return useQuery<Coach[], Error>('coaches', getAllCoaches, queryOptions)
}
