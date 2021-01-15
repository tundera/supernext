import type { Coach } from 'types/nexus'

import { request } from 'graphql-request'

import CoachesQuery from '@graphql/nexus/queries/Coaches'

const endpoint = `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`

export async function getAllCoaches(): Promise<Coach[]> {
  const { allCoaches: data } = await request(endpoint, CoachesQuery)

  return data
}
