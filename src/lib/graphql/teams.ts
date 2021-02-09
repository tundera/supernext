import type { Team } from '@prisma/client'

import { request } from 'graphql-request'

import { TeamsDocument, TeamBySlugDocument } from 'src/graphql/generated'

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? ''

export async function getAllTeams(): Promise<Team[]> {
  const { teams: data } = await request(endpoint, TeamsDocument)

  return data
}

export async function getTeamBySlug(slug: string): Promise<Team> {
  const { team: data } = await request(endpoint, TeamBySlugDocument, { slug })

  return data
}
