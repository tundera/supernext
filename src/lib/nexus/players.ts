import type { Player } from 'src/services/nexus/types'

import { request } from 'graphql-request'

import AllPlayersQuery from 'src/services/nexus/graphql/queries/AllPlayers'

const endpoint = `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`

export async function getAllPlayers(): Promise<Player[]> {
  const { allPlayers: data } = await request(endpoint, AllPlayersQuery)

  return data
}
