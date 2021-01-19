import type { Player } from 'types/nexus'

import { request } from 'graphql-request'

import AllPlayersQuery from '@graphql/nexus/queries/AllPlayers'

const endpoint = `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`

export async function getAllPlayers(): Promise<Player[]> {
  const { allPlayers: data } = await request(endpoint, AllPlayersQuery)

  return data
}
