import type { Team } from '@prisma/client'

import { request } from 'graphql-request'

import AllTeamsQuery from 'src/graphql/queries/AllTeams'
import TeamBySlugQuery from 'src/graphql/queries/TeamBySlug'

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? ''

export async function getAllTeams(): Promise<Team[]> {
  const { teams: data } = await request(endpoint, AllTeamsQuery)

  return data
}

export async function getTeamBySlug(slug: string): Promise<Team> {
  const { team: data } = await request(endpoint, TeamBySlugQuery, { slug })

  return data
}
