import type { Team } from 'src/services/nexus/types'

import { request } from 'graphql-request'

import AllTeamsQuery from 'src/services/nexus/graphql/queries/AllTeams'

const endpoint = `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`

export async function getAllTeams(): Promise<Team[]> {
  const { allTeams: data } = await request(endpoint, AllTeamsQuery)

  return data
}
