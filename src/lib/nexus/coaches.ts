import type { Coach } from 'types/nexus'

import { request } from 'graphql-request'

import AllCoachesQuery from '@graphql/nexus/queries/AllCoaches'

const endpoint = `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`

export async function getAllCoaches(): Promise<Coach[]> {
  const { allCoaches: data } = await request(endpoint, AllCoachesQuery)

  return data
}
