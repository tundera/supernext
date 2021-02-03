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
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any
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

export type CoachListRelationFilter = {
  every?: Maybe<CoachWhereInput>
  none?: Maybe<CoachWhereInput>
  some?: Maybe<CoachWhereInput>
}

export type CoachOrderByInput = {
  createdAt?: Maybe<SortOrder>
  handle?: Maybe<SortOrder>
  id?: Maybe<SortOrder>
  isAssistant?: Maybe<SortOrder>
  name?: Maybe<SortOrder>
  teamId?: Maybe<SortOrder>
  type?: Maybe<SortOrder>
  updatedAt?: Maybe<SortOrder>
}

export type CoachWhereInput = {
  AND?: Maybe<Array<CoachWhereInput>>
  NOT?: Maybe<Array<CoachWhereInput>>
  OR?: Maybe<Array<CoachWhereInput>>
  createdAt?: Maybe<DateTimeFilter>
  handle?: Maybe<StringFilter>
  id?: Maybe<IntFilter>
  isAssistant?: Maybe<StringNullableFilter>
  name?: Maybe<StringFilter>
  team?: Maybe<TeamWhereInput>
  teamId?: Maybe<IntNullableFilter>
  type?: Maybe<StringNullableFilter>
  updatedAt?: Maybe<DateTimeFilter>
}

export type CoachWhereUniqueInput = {
  handle?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
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

export type ColorSchemeListRelationFilter = {
  every?: Maybe<ColorSchemeWhereInput>
  none?: Maybe<ColorSchemeWhereInput>
  some?: Maybe<ColorSchemeWhereInput>
}

export type ColorSchemeOrderByInput = {
  createdAt?: Maybe<SortOrder>
  id?: Maybe<SortOrder>
  primary?: Maybe<SortOrder>
  secondary?: Maybe<SortOrder>
  teamId?: Maybe<SortOrder>
  updatedAt?: Maybe<SortOrder>
}

export type ColorSchemeWhereInput = {
  AND?: Maybe<Array<ColorSchemeWhereInput>>
  NOT?: Maybe<Array<ColorSchemeWhereInput>>
  OR?: Maybe<Array<ColorSchemeWhereInput>>
  createdAt?: Maybe<DateTimeFilter>
  id?: Maybe<IntFilter>
  primary?: Maybe<StringFilter>
  secondary?: Maybe<StringFilter>
  team?: Maybe<TeamWhereInput>
  teamId?: Maybe<IntNullableFilter>
  updatedAt?: Maybe<DateTimeFilter>
}

export type ColorSchemeWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>
}

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>
  gt?: Maybe<Scalars['DateTime']>
  gte?: Maybe<Scalars['DateTime']>
  in?: Maybe<Array<Scalars['DateTime']>>
  lt?: Maybe<Scalars['DateTime']>
  lte?: Maybe<Scalars['DateTime']>
  not?: Maybe<NestedDateTimeFilter>
  notIn?: Maybe<Array<Scalars['DateTime']>>
}

export type FloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>
  gt?: Maybe<Scalars['Float']>
  gte?: Maybe<Scalars['Float']>
  in?: Maybe<Array<Scalars['Float']>>
  lt?: Maybe<Scalars['Float']>
  lte?: Maybe<Scalars['Float']>
  not?: Maybe<NestedFloatNullableFilter>
  notIn?: Maybe<Array<Scalars['Float']>>
}

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Scalars['Int']>>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  not?: Maybe<NestedIntFilter>
  notIn?: Maybe<Array<Scalars['Int']>>
}

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Scalars['Int']>>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  not?: Maybe<NestedIntNullableFilter>
  notIn?: Maybe<Array<Scalars['Int']>>
}

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>
  gt?: Maybe<Scalars['DateTime']>
  gte?: Maybe<Scalars['DateTime']>
  in?: Maybe<Array<Scalars['DateTime']>>
  lt?: Maybe<Scalars['DateTime']>
  lte?: Maybe<Scalars['DateTime']>
  not?: Maybe<NestedDateTimeFilter>
  notIn?: Maybe<Array<Scalars['DateTime']>>
}

export type NestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>
  gt?: Maybe<Scalars['Float']>
  gte?: Maybe<Scalars['Float']>
  in?: Maybe<Array<Scalars['Float']>>
  lt?: Maybe<Scalars['Float']>
  lte?: Maybe<Scalars['Float']>
  not?: Maybe<NestedFloatNullableFilter>
  notIn?: Maybe<Array<Scalars['Float']>>
}

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Scalars['Int']>>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  not?: Maybe<NestedIntFilter>
  notIn?: Maybe<Array<Scalars['Int']>>
}

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Scalars['Int']>>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  not?: Maybe<NestedIntNullableFilter>
  notIn?: Maybe<Array<Scalars['Int']>>
}

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>
  endsWith?: Maybe<Scalars['String']>
  equals?: Maybe<Scalars['String']>
  gt?: Maybe<Scalars['String']>
  gte?: Maybe<Scalars['String']>
  in?: Maybe<Array<Scalars['String']>>
  lt?: Maybe<Scalars['String']>
  lte?: Maybe<Scalars['String']>
  not?: Maybe<NestedStringFilter>
  notIn?: Maybe<Array<Scalars['String']>>
  startsWith?: Maybe<Scalars['String']>
}

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars['String']>
  endsWith?: Maybe<Scalars['String']>
  equals?: Maybe<Scalars['String']>
  gt?: Maybe<Scalars['String']>
  gte?: Maybe<Scalars['String']>
  in?: Maybe<Array<Scalars['String']>>
  lt?: Maybe<Scalars['String']>
  lte?: Maybe<Scalars['String']>
  not?: Maybe<NestedStringNullableFilter>
  notIn?: Maybe<Array<Scalars['String']>>
  startsWith?: Maybe<Scalars['String']>
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

export type PlayerListRelationFilter = {
  every?: Maybe<PlayerWhereInput>
  none?: Maybe<PlayerWhereInput>
  some?: Maybe<PlayerWhereInput>
}

export type PlayerOrderByInput = {
  createdAt?: Maybe<SortOrder>
  handle?: Maybe<SortOrder>
  height?: Maybe<SortOrder>
  id?: Maybe<SortOrder>
  name?: Maybe<SortOrder>
  number?: Maybe<SortOrder>
  position?: Maybe<SortOrder>
  slug?: Maybe<SortOrder>
  teamId?: Maybe<SortOrder>
  updatedAt?: Maybe<SortOrder>
  weight?: Maybe<SortOrder>
}

export type PlayerWhereInput = {
  AND?: Maybe<Array<PlayerWhereInput>>
  NOT?: Maybe<Array<PlayerWhereInput>>
  OR?: Maybe<Array<PlayerWhereInput>>
  createdAt?: Maybe<DateTimeFilter>
  handle?: Maybe<StringFilter>
  height?: Maybe<StringFilter>
  id?: Maybe<IntFilter>
  name?: Maybe<StringFilter>
  number?: Maybe<StringNullableFilter>
  position?: Maybe<StringNullableFilter>
  slug?: Maybe<StringFilter>
  team?: Maybe<TeamWhereInput>
  teamId?: Maybe<IntNullableFilter>
  updatedAt?: Maybe<DateTimeFilter>
  weight?: Maybe<StringFilter>
}

export type PlayerWhereUniqueInput = {
  handle?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  allCoaches?: Maybe<Array<Maybe<Coach>>>
  allColorSchemes?: Maybe<Array<Maybe<ColorScheme>>>
  allPlayers?: Maybe<Array<Maybe<Player>>>
  allTeams?: Maybe<Array<Maybe<Team>>>
  coach?: Maybe<Coach>
  coaches: Array<Coach>
  coachesByTeam?: Maybe<Array<Maybe<Coach>>>
  colorScheme?: Maybe<ColorScheme>
  colorSchemeByTeam?: Maybe<Array<Maybe<ColorScheme>>>
  colorSchemes: Array<ColorScheme>
  player?: Maybe<Player>
  players: Array<Player>
  playersByTeam?: Maybe<Array<Maybe<Player>>>
  team?: Maybe<Team>
  teams: Array<Team>
}

export type QueryCoachArgs = {
  where: CoachWhereUniqueInput
}

export type QueryCoachesArgs = {
  cursor?: Maybe<CoachWhereUniqueInput>
  orderBy?: Maybe<Array<CoachOrderByInput>>
  skip?: Maybe<Scalars['Int']>
  take?: Maybe<Scalars['Int']>
  where?: Maybe<CoachWhereInput>
}

export type QueryCoachesByTeamArgs = {
  id?: Maybe<Scalars['Int']>
}

export type QueryColorSchemeArgs = {
  where: ColorSchemeWhereUniqueInput
}

export type QueryColorSchemeByTeamArgs = {
  id?: Maybe<Scalars['Int']>
}

export type QueryColorSchemesArgs = {
  cursor?: Maybe<ColorSchemeWhereUniqueInput>
  orderBy?: Maybe<Array<ColorSchemeOrderByInput>>
  skip?: Maybe<Scalars['Int']>
  take?: Maybe<Scalars['Int']>
  where?: Maybe<ColorSchemeWhereInput>
}

export type QueryPlayerArgs = {
  where: PlayerWhereUniqueInput
}

export type QueryPlayersArgs = {
  cursor?: Maybe<PlayerWhereUniqueInput>
  orderBy?: Maybe<Array<PlayerOrderByInput>>
  skip?: Maybe<Scalars['Int']>
  take?: Maybe<Scalars['Int']>
  where?: Maybe<PlayerWhereInput>
}

export type QueryPlayersByTeamArgs = {
  id?: Maybe<Scalars['Int']>
}

export type QueryTeamArgs = {
  where: TeamWhereUniqueInput
}

export type QueryTeamsArgs = {
  cursor?: Maybe<TeamWhereUniqueInput>
  orderBy?: Maybe<Array<TeamOrderByInput>>
  skip?: Maybe<Scalars['Int']>
  take?: Maybe<Scalars['Int']>
  where?: Maybe<TeamWhereInput>
}

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFilter = {
  contains?: Maybe<Scalars['String']>
  endsWith?: Maybe<Scalars['String']>
  equals?: Maybe<Scalars['String']>
  gt?: Maybe<Scalars['String']>
  gte?: Maybe<Scalars['String']>
  in?: Maybe<Array<Scalars['String']>>
  lt?: Maybe<Scalars['String']>
  lte?: Maybe<Scalars['String']>
  mode?: Maybe<QueryMode>
  not?: Maybe<NestedStringFilter>
  notIn?: Maybe<Array<Scalars['String']>>
  startsWith?: Maybe<Scalars['String']>
}

export type StringNullableFilter = {
  contains?: Maybe<Scalars['String']>
  endsWith?: Maybe<Scalars['String']>
  equals?: Maybe<Scalars['String']>
  gt?: Maybe<Scalars['String']>
  gte?: Maybe<Scalars['String']>
  in?: Maybe<Array<Scalars['String']>>
  lt?: Maybe<Scalars['String']>
  lte?: Maybe<Scalars['String']>
  mode?: Maybe<QueryMode>
  not?: Maybe<NestedStringNullableFilter>
  notIn?: Maybe<Array<Scalars['String']>>
  startsWith?: Maybe<Scalars['String']>
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
  slug: Scalars['String']
  updatedAt: Scalars['DateTime']
  winPercentage?: Maybe<Scalars['Float']>
  wins?: Maybe<Scalars['Int']>
}

export type TeamCoachesArgs = {
  cursor?: Maybe<CoachWhereUniqueInput>
  skip?: Maybe<Scalars['Int']>
  take?: Maybe<Scalars['Int']>
}

export type TeamColorSchemeArgs = {
  cursor?: Maybe<ColorSchemeWhereUniqueInput>
  skip?: Maybe<Scalars['Int']>
  take?: Maybe<Scalars['Int']>
}

export type TeamPlayersArgs = {
  cursor?: Maybe<PlayerWhereUniqueInput>
  skip?: Maybe<Scalars['Int']>
  take?: Maybe<Scalars['Int']>
}

export type TeamOrderByInput = {
  abbreviation?: Maybe<SortOrder>
  city?: Maybe<SortOrder>
  conference?: Maybe<SortOrder>
  createdAt?: Maybe<SortOrder>
  division?: Maybe<SortOrder>
  established?: Maybe<SortOrder>
  handle?: Maybe<SortOrder>
  id?: Maybe<SortOrder>
  logo?: Maybe<SortOrder>
  losses?: Maybe<SortOrder>
  name?: Maybe<SortOrder>
  primaryColor?: Maybe<SortOrder>
  secondaryColor?: Maybe<SortOrder>
  slug?: Maybe<SortOrder>
  updatedAt?: Maybe<SortOrder>
  winPercentage?: Maybe<SortOrder>
  wins?: Maybe<SortOrder>
}

export type TeamWhereInput = {
  AND?: Maybe<Array<TeamWhereInput>>
  NOT?: Maybe<Array<TeamWhereInput>>
  OR?: Maybe<Array<TeamWhereInput>>
  abbreviation?: Maybe<StringFilter>
  city?: Maybe<StringFilter>
  coaches?: Maybe<CoachListRelationFilter>
  colorScheme?: Maybe<ColorSchemeListRelationFilter>
  conference?: Maybe<StringFilter>
  createdAt?: Maybe<DateTimeFilter>
  division?: Maybe<StringFilter>
  established?: Maybe<StringFilter>
  handle?: Maybe<StringFilter>
  id?: Maybe<IntFilter>
  logo?: Maybe<StringFilter>
  losses?: Maybe<IntNullableFilter>
  name?: Maybe<StringFilter>
  players?: Maybe<PlayerListRelationFilter>
  primaryColor?: Maybe<StringFilter>
  secondaryColor?: Maybe<StringFilter>
  slug?: Maybe<StringFilter>
  updatedAt?: Maybe<DateTimeFilter>
  winPercentage?: Maybe<FloatNullableFilter>
  wins?: Maybe<IntNullableFilter>
}

export type TeamWhereUniqueInput = {
  abbreviation?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  logo?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
}

export type CoachesQueryVariables = Exact<{ [key: string]: never }>

export type CoachesQuery = { __typename?: 'Query' } & {
  coaches: Array<
    { __typename?: 'Coach' } & Pick<Coach, 'id' | 'name'> & {
        team?: Maybe<{ __typename?: 'Team' } & Pick<Team, 'name'>>
      }
  >
}

export type CoachesByTeamQueryVariables = Exact<{
  id?: Maybe<Scalars['Int']>
}>

export type CoachesByTeamQuery = { __typename?: 'Query' } & {
  coachesByTeam?: Maybe<Array<Maybe<{ __typename?: 'Coach' } & Pick<Coach, 'id' | 'name'>>>>
}

export type ColorSchemeByTeamQueryVariables = Exact<{
  id?: Maybe<Scalars['Int']>
}>

export type ColorSchemeByTeamQuery = { __typename?: 'Query' } & {
  colorSchemeByTeam?: Maybe<
    Array<Maybe<{ __typename?: 'ColorScheme' } & Pick<ColorScheme, 'id' | 'primary' | 'secondary'>>>
  >
}

export type ColorSchemesQueryVariables = Exact<{ [key: string]: never }>

export type ColorSchemesQuery = { __typename?: 'Query' } & {
  colorSchemes: Array<{ __typename?: 'ColorScheme' } & Pick<ColorScheme, 'id' | 'primary' | 'secondary' | 'teamId'>>
}

export type PlayersQueryVariables = Exact<{ [key: string]: never }>

export type PlayersQuery = { __typename?: 'Query' } & {
  players: Array<
    { __typename?: 'Player' } & Pick<Player, 'id' | 'name' | 'position' | 'number' | 'height' | 'weight'> & {
        team?: Maybe<{ __typename?: 'Team' } & Pick<Team, 'name'>>
      }
  >
}

export type PlayersByTeamQueryVariables = Exact<{
  id?: Maybe<Scalars['Int']>
}>

export type PlayersByTeamQuery = { __typename?: 'Query' } & {
  playersByTeam?: Maybe<Array<Maybe<{ __typename?: 'Player' } & Pick<Player, 'id' | 'name'>>>>
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
  teams: Array<
    { __typename?: 'Team' } & Pick<Team, 'id' | 'name' | 'slug' | 'city' | 'logo'> & {
        colorScheme: Array<{ __typename?: 'ColorScheme' } & Pick<ColorScheme, 'primary' | 'secondary'>>
      }
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
    query ColorSchemeByTeam($id: Int) {
  colorSchemeByTeam(id: $id) {
    id
    primary
    secondary
  }
}
    `
export const useColorSchemeByTeamQuery = <TData = ColorSchemeByTeamQuery, TError = unknown>(
  client: GraphQLClient,
  variables?: ColorSchemeByTeamQueryVariables,
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
  team(where: {slug: $slug}) {
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
