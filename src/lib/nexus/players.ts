import type { Player } from 'services/nexus/types'

import { request } from 'graphql-request'

import AllPlayersQuery from 'services/nexus/graphql/queries/AllPlayers'
import PlayersByTeamQuery from 'services/nexus/graphql/queries/PlayersByTeam'

const endpoint = `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`

export async function getAllPlayers(): Promise<Player[]> {
  const { allPlayers: data } = await request(endpoint, AllPlayersQuery)

  return data
}

export async function getPlayersByTeam(id: number): Promise<Player[]> {
  const { allPlayers: data } = await request(endpoint, PlayersByTeamQuery, { id })

  return data
}
