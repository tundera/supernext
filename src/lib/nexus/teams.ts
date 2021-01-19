import type { Team } from 'types/nexus'

import { request } from 'graphql-request'

import AllTeamsQuery from '@graphql/nexus/queries/AllTeams'

const endpoint = `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`

export async function getAllTeams(): Promise<Team[]> {
  const { allTeams: data } = await request(endpoint, AllTeamsQuery)

  return data
}
