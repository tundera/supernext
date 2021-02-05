import type { Coach } from 'db'

import { request } from 'graphql-request'

import { CoachesDocument, CoachesByTeamDocument } from 'src/graphql/generated'

const endpoint = `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`

export async function getAllCoaches(): Promise<Coach[]> {
  const { coaches: data } = await request(endpoint, CoachesDocument)

  return data
}

export async function getCoachesByTeam(slug: string): Promise<Coach[]> {
  const { coachesByTeam: data } = await request(endpoint, CoachesByTeamDocument, { slug })

  return data
}
