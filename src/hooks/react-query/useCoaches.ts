import type { Coach } from 'types/nexus'

import { useQuery, UseQueryOptions } from 'react-query'
import { request } from 'graphql-request'

import CoachesQuery from '@graphql/nexus/queries/Coaches'

const endpoint = `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`

export async function getAllCoaches(): Promise<Coach[]> {
  const { allCoaches: data } = await request(endpoint, CoachesQuery)

  return data
}

export function useCoaches(options?: UseQueryOptions<Coach[], Error>) {
  const queryOptions = { ...options }

  return useQuery<Coach[], Error>('coaches', getAllCoaches, queryOptions)
}
