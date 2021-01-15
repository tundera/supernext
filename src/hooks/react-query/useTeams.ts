import type { Team } from 'types/nexus'

import { useQuery, UseQueryOptions } from 'react-query'
import { request } from 'graphql-request'

import TeamsQuery from '@graphql/nexus/queries/Teams'

const endpoint = `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`

export async function getAllTeams(): Promise<Team[]> {
  const { allTeams: data } = await request(endpoint, TeamsQuery)

  return data
}

export function useTeams(options?: UseQueryOptions<Team[], Error>) {
  const queryOptions = { ...options }

  return useQuery<Team[], Error>('teams', getAllTeams, queryOptions)
}
