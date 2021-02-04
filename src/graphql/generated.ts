import { GraphQLClient } from 'graphql-request'
import { useQuery, UseQueryOptions } from 'react-query'

export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables)
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any
  /** The `Upload` scalar type represents a file upload. */
  Upload: any
}

export type Coach = {
  __typename?: 'Coach'
  createdAt: Scalars['DateTime']
  handle: Scalars['String']
  id: Scalars['Int']
  isAssistant?: Maybe<Scalars['String']>
  name: Scalars['String']
  team?: Maybe<Team>
  teamId?: Maybe<Scalars['Int']>
  type?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

export type CoachOrderByInput = {
  name: SortOrder
}

export type CoachWhereInput = {
  id: Scalars['Int']
  name: StringFilter
}

export type CoachWhereUniqueInput = {
  id: Scalars['Int']
}

export type ColorScheme = {
  __typename?: 'ColorScheme'
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  primary: Scalars['String']
  secondary: Scalars['String']
  team?: Maybe<Team>
  teamId?: Maybe<Scalars['Int']>
  updatedAt: Scalars['DateTime']
}

export type IntFilter = {
  contains: Scalars['Int']
  endsWith: Scalars['Int']
  equals: Scalars['Int']
  gt: Scalars['Int']
  gte: Scalars['Int']
  in: Array<Scalars['Int']>
  lt: Scalars['Int']
  lte: Scalars['Int']
  notIn: Array<Scalars['Int']>
  startsWith: Scalars['Int']
}

export type Player = {
  __typename?: 'Player'
  createdAt: Scalars['DateTime']
  handle: Scalars['String']
  height: Scalars['String']
  id: Scalars['Int']
  name: Scalars['String']
  number?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['String']>
  slug: Scalars['String']
  team?: Maybe<Team>
  teamId?: Maybe<Scalars['Int']>
  updatedAt: Scalars['DateTime']
  weight: Scalars['String']
}

export type PlayerOrderByInput = {
  name: SortOrder
}

export type PlayerWhereInput = {
  id: Scalars['Int']
  name: StringFilter
}

export type PlayerWhereUniqueInput = {
  id: Scalars['Int']
}

export type Query = {
  __typename?: 'Query'
  coaches?: Maybe<Array<Maybe<Coach>>>
  coachesByTeam?: Maybe<Array<Maybe<Coach>>>
  colorSchemeByTeam?: Maybe<ColorScheme>
  colorSchemes?: Maybe<Array<Maybe<ColorScheme>>>
  players?: Maybe<Array<Maybe<Player>>>
  playersByTeam?: Maybe<Array<Maybe<Player>>>
  team?: Maybe<Team>
  teams?: Maybe<Array<Maybe<Team>>>
}

export type QueryCoachesByTeamArgs = {
  id?: Maybe<Scalars['Int']>
}

export type QueryColorSchemeByTeamArgs = {
  id?: Maybe<Scalars['Int']>
}

export type QueryPlayersByTeamArgs = {
  id?: Maybe<Scalars['Int']>
}

export type QueryTeamArgs = {
  slug?: Maybe<Scalars['String']>
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFilter = {
  contains: Scalars['String']
  endsWith: Scalars['String']
  equals: Scalars['String']
  gt: Scalars['String']
  gte: Scalars['String']
  in: Array<Scalars['String']>
  lt: Scalars['String']
  lte: Scalars['String']
  notIn: Array<Scalars['String']>
  startsWith: Scalars['String']
}

export type Team = {
  __typename?: 'Team'
  abbreviation: Scalars['String']
  city: Scalars['String']
  coaches: Array<Coach>
  colorScheme: Array<ColorScheme>
  conference: Scalars['String']
  createdAt: Scalars['DateTime']
  division: Scalars['String']
  established: Scalars['String']
  handle: Scalars['String']
  id: Scalars['Int']
  logo: Scalars['String']
  losses?: Maybe<Scalars['Int']>
  name: Scalars['String']
  players: Array<Player>
  primaryColor: Scalars['String']
  secondaryColor: Scalars['String']
  slug: Scalars['String']
  updatedAt: Scalars['DateTime']
  winPercentage?: Maybe<Scalars['Float']>
  wins?: Maybe<Scalars['Int']>
}

export type TeamCoachesArgs = {
  cursor?: Maybe<CoachWhereUniqueInput>
  orderBy?: Maybe<CoachOrderByInput>
  skip?: Maybe<Scalars['Int']>
  take?: Maybe<Scalars['Int']>
  where?: Maybe<CoachWhereInput>
}

export type TeamPlayersArgs = {
  cursor?: Maybe<PlayerWhereUniqueInput>
  orderBy?: Maybe<PlayerOrderByInput>
  skip?: Maybe<Scalars['Int']>
  take?: Maybe<Scalars['Int']>
  where?: Maybe<PlayerWhereInput>
}

export type TeamOrderByInput = {
  slug: SortOrder
}

export type TeamWhereInput = {
  id: Scalars['Int']
  slug: StringFilter
}

export type TeamWhereUniqueInput = {
  id: Scalars['Int']
}

export type CoachesQueryVariables = Exact<{ [key: string]: never }>

export type CoachesQuery = { __typename?: 'Query' } & {
  coaches?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Coach' } & Pick<Coach, 'id' | 'name'> & {
            team?: Maybe<{ __typename?: 'Team' } & Pick<Team, 'name'>>
          }
      >
    >
  >
}

export type CoachesByTeamQueryVariables = Exact<{
  id?: Maybe<Scalars['Int']>
}>

export type CoachesByTeamQuery = { __typename?: 'Query' } & {
  coachesByTeam?: Maybe<Array<Maybe<{ __typename?: 'Coach' } & Pick<Coach, 'id' | 'name'>>>>
}

export type ColorSchemeByTeamQueryVariables = Exact<{
  id: Scalars['Int']
}>

export type ColorSchemeByTeamQuery = { __typename?: 'Query' } & {
  colorSchemeByTeam?: Maybe<{ __typename?: 'ColorScheme' } & Pick<ColorScheme, 'id' | 'primary' | 'secondary'>>
}

export type ColorSchemesQueryVariables = Exact<{ [key: string]: never }>

export type ColorSchemesQuery = { __typename?: 'Query' } & {
  colorSchemes?: Maybe<
    Array<Maybe<{ __typename?: 'ColorScheme' } & Pick<ColorScheme, 'id' | 'primary' | 'secondary' | 'teamId'>>>
  >
}

export type PlayersQueryVariables = Exact<{ [key: string]: never }>

export type PlayersQuery = { __typename?: 'Query' } & {
  players?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Player' } & Pick<Player, 'id' | 'name' | 'position' | 'number' | 'height' | 'weight'> & {
            team?: Maybe<{ __typename?: 'Team' } & Pick<Team, 'name'>>
          }
      >
    >
  >
}

export type PlayersByTeamQueryVariables = Exact<{
  id?: Maybe<Scalars['Int']>
}>

export type PlayersByTeamQuery = { __typename?: 'Query' } & {
  playersByTeam?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Player' } & Pick<Player, 'id' | 'name' | 'slug' | 'number' | 'position' | 'height' | 'weight'>
      >
    >
  >
}

export type TeamBySlugQueryVariables = Exact<{
  slug: Scalars['String']
}>

export type TeamBySlugQuery = { __typename?: 'Query' } & {
  team?: Maybe<
    { __typename?: 'Team' } & Pick<Team, 'id' | 'name' | 'city' | 'established' | 'logo'> & {
        colorScheme: Array<{ __typename?: 'ColorScheme' } & Pick<ColorScheme, 'primary' | 'secondary'>>
      }
  >
}

export type TeamsQueryVariables = Exact<{ [key: string]: never }>

export type TeamsQuery = { __typename?: 'Query' } & {
  teams?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Team' } & Pick<Team, 'id' | 'name' | 'slug' | 'city' | 'logo'> & {
            colorScheme: Array<{ __typename?: 'ColorScheme' } & Pick<ColorScheme, 'primary' | 'secondary'>>
          }
      >
    >
  >
}

export const CoachesDocument = `
    query Coaches {
  coaches {
    id
    name
    team {
      name
    }
  }
}
    `
export const useCoachesQuery = <TData = CoachesQuery, TError = unknown>(
  client: GraphQLClient,
  variables?: CoachesQueryVariables,
  options?: UseQueryOptions<CoachesQuery, TError, TData>,
) =>
  useQuery<CoachesQuery, TError, TData>(
    ['Coaches', variables],
    fetcher<CoachesQuery, CoachesQueryVariables>(client, CoachesDocument, variables),
    options,
  )
export const CoachesByTeamDocument = `
    query CoachesByTeam($id: Int) {
  coachesByTeam(id: $id) {
    id
    name
  }
}
    `
export const useCoachesByTeamQuery = <TData = CoachesByTeamQuery, TError = unknown>(
  client: GraphQLClient,
  variables?: CoachesByTeamQueryVariables,
  options?: UseQueryOptions<CoachesByTeamQuery, TError, TData>,
) =>
  useQuery<CoachesByTeamQuery, TError, TData>(
    ['CoachesByTeam', variables],
    fetcher<CoachesByTeamQuery, CoachesByTeamQueryVariables>(client, CoachesByTeamDocument, variables),
    options,
  )
export const ColorSchemeByTeamDocument = `
    query ColorSchemeByTeam($id: Int!) {
  colorSchemeByTeam(id: $id) {
    id
    primary
    secondary
  }
}
    `
export const useColorSchemeByTeamQuery = <TData = ColorSchemeByTeamQuery, TError = unknown>(
  client: GraphQLClient,
  variables: ColorSchemeByTeamQueryVariables,
  options?: UseQueryOptions<ColorSchemeByTeamQuery, TError, TData>,
) =>
  useQuery<ColorSchemeByTeamQuery, TError, TData>(
    ['ColorSchemeByTeam', variables],
    fetcher<ColorSchemeByTeamQuery, ColorSchemeByTeamQueryVariables>(client, ColorSchemeByTeamDocument, variables),
    options,
  )
export const ColorSchemesDocument = `
    query ColorSchemes {
  colorSchemes {
    id
    primary
    secondary
    teamId
  }
}
    `
export const useColorSchemesQuery = <TData = ColorSchemesQuery, TError = unknown>(
  client: GraphQLClient,
  variables?: ColorSchemesQueryVariables,
  options?: UseQueryOptions<ColorSchemesQuery, TError, TData>,
) =>
  useQuery<ColorSchemesQuery, TError, TData>(
    ['ColorSchemes', variables],
    fetcher<ColorSchemesQuery, ColorSchemesQueryVariables>(client, ColorSchemesDocument, variables),
    options,
  )
export const PlayersDocument = `
    query Players {
  players {
    id
    name
    team {
      name
    }
    position
    number
    height
    weight
  }
}
    `
export const usePlayersQuery = <TData = PlayersQuery, TError = unknown>(
  client: GraphQLClient,
  variables?: PlayersQueryVariables,
  options?: UseQueryOptions<PlayersQuery, TError, TData>,
) =>
  useQuery<PlayersQuery, TError, TData>(
    ['Players', variables],
    fetcher<PlayersQuery, PlayersQueryVariables>(client, PlayersDocument, variables),
    options,
  )
export const PlayersByTeamDocument = `
    query PlayersByTeam($id: Int) {
  playersByTeam(id: $id) {
    id
    name
    slug
    number
    position
    height
    weight
  }
}
    `
export const usePlayersByTeamQuery = <TData = PlayersByTeamQuery, TError = unknown>(
  client: GraphQLClient,
  variables?: PlayersByTeamQueryVariables,
  options?: UseQueryOptions<PlayersByTeamQuery, TError, TData>,
) =>
  useQuery<PlayersByTeamQuery, TError, TData>(
    ['PlayersByTeam', variables],
    fetcher<PlayersByTeamQuery, PlayersByTeamQueryVariables>(client, PlayersByTeamDocument, variables),
    options,
  )
export const TeamBySlugDocument = `
    query TeamBySlug($slug: String!) {
  team(slug: $slug) {
    id
    name
    city
    established
    logo
    colorScheme {
      primary
      secondary
    }
  }
}
    `
export const useTeamBySlugQuery = <TData = TeamBySlugQuery, TError = unknown>(
  client: GraphQLClient,
  variables: TeamBySlugQueryVariables,
  options?: UseQueryOptions<TeamBySlugQuery, TError, TData>,
) =>
  useQuery<TeamBySlugQuery, TError, TData>(
    ['TeamBySlug', variables],
    fetcher<TeamBySlugQuery, TeamBySlugQueryVariables>(client, TeamBySlugDocument, variables),
    options,
  )
export const TeamsDocument = `
    query Teams {
  teams {
    id
    name
    slug
    city
    logo
    colorScheme {
      primary
      secondary
    }
  }
}
    `
export const useTeamsQuery = <TData = TeamsQuery, TError = unknown>(
  client: GraphQLClient,
  variables?: TeamsQueryVariables,
  options?: UseQueryOptions<TeamsQuery, TError, TData>,
) =>
  useQuery<TeamsQuery, TError, TData>(
    ['Teams', variables],
    fetcher<TeamsQuery, TeamsQueryVariables>(client, TeamsDocument, variables),
    options,
  )
