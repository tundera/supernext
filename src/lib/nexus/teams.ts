import type { Team } from '@prisma/client'

import { request } from 'graphql-request'

import AllTeamsQuery from 'services/graphql/operations/queries/AllTeams'

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? ''

export async function getAllTeams(): Promise<Team[]> {
  const { allTeams: data } = await request(endpoint, AllTeamsQuery)

  return data
}
