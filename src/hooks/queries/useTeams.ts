import type { NexusGenObjects } from '@lib/graphql/generated/nexus-typegen'

import { useQuery, UseQueryOptions } from 'react-query'
import { request } from 'graphql-request'

import GetAllTeams from '@lib/graphql/operations/queries/GetAllTeams'

type Team = NexusGenObjects['Team']

const endpoint = `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`

export async function getAllTeams(): Promise<Team[]> {
  const { allTeams: data } = await request(endpoint, GetAllTeams)

  return data
}

export function useTeams(options?: UseQueryOptions<Team[], Error>) {
  const queryOptions = { ...options }

  return useQuery<Team[], Error>('teams', getAllTeams, queryOptions)
}
