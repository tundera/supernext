import { request } from 'graphql-request'

import AllTeamsQuery from 'services/nexus/graphql/queries/AllTeams'
import { Team } from 'services/nexus/types'

const endpoint = `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`

export async function getAllTeams(): Promise<Team[]> {
  const { allTeams: data } = await request(endpoint, AllTeamsQuery)

  return data
}
