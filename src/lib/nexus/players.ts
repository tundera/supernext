import type { Player } from 'types/nexus'

import { request } from 'graphql-request'

import PlayersQuery from '@graphql/nexus/queries/Players'

const endpoint = `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`

export async function getAllPlayers(): Promise<Player[]> {
  const { allPlayers: data } = await request(endpoint, PlayersQuery)

  return data
}
