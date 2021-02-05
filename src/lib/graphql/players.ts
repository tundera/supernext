import type { Player } from 'db'

import { request } from 'graphql-request'

import { PlayersDocument, PlayersByTeamDocument } from 'src/graphql/generated'

const endpoint = `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`

export async function getAllPlayers(): Promise<Player[]> {
  const { players: data } = await request(endpoint, PlayersDocument)

  return data
}

export async function getPlayersByTeam(id: number): Promise<Player[]> {
  const { players: data } = await request(endpoint, PlayersByTeamDocument, { id })

  return data
}
