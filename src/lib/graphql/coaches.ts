import type { Coach } from 'db'

import { request } from 'graphql-request'

import AllCoachesQuery from 'src/graphql/queries/AllCoaches'
import CoachesByTeamQuery from 'src/graphql/queries/CoachesByTeam'

const endpoint = `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`

export async function getAllCoaches(): Promise<Coach[]> {
  const { coaches: data } = await request(endpoint, AllCoachesQuery)

  return data
}

export async function getCoachesByTeam(slug: string): Promise<Coach[]> {
  const { coachesByTeam: data } = await request(endpoint, CoachesByTeamQuery, { slug })

  return data
}
