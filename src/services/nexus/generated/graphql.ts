import type { GraphQLClient } from 'graphql-request'
import { print } from 'graphql'
import gql from 'graphql-tag'

export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
}

export type Player = {
  __typename?: 'Player'
  id: Scalars['Int']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  handle: Scalars['String']
  name: Scalars['String']
  slug: Scalars['String']
  teamId?: Maybe<Scalars['Int']>
  height: Scalars['String']
  weight: Scalars['String']
  number?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['String']>
  team?: Maybe<Team>
}

export type Coach = {
  __typename?: 'Coach'
  id: Scalars['Int']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  handle: Scalars['String']
  name: Scalars['String']
  teamId?: Maybe<Scalars['Int']>
  type?: Maybe<Scalars['String']>
  isAssistant?: Maybe<Scalars['String']>
  team?: Maybe<Team>
}

export type ColorScheme = {
  __typename?: 'ColorScheme'
  id: Scalars['Int']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  primary: Scalars['String']
  secondary: Scalars['String']
  teamId?: Maybe<Scalars['Int']>
  team?: Maybe<Team>
}

export type Team = {
  __typename?: 'Team'
  id: Scalars['Int']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  handle: Scalars['String']
  name: Scalars['String']
  slug: Scalars['String']
  city: Scalars['String']
  colorScheme: Array<ColorScheme>
  abbreviation: Scalars['String']
  logo: Scalars['String']
  wins?: Maybe<Scalars['Int']>
  losses?: Maybe<Scalars['Int']>
  winPercentage?: Maybe<Scalars['Float']>
  conference: Scalars['String']
  division: Scalars['String']
  established: Scalars['String']
  coaches: Array<Coach>
  players: Array<Player>
}

export type TeamColorSchemeArgs = {
  take?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  cursor?: Maybe<ColorSchemeWhereUniqueInput>
}

export type TeamCoachesArgs = {
  take?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  cursor?: Maybe<CoachWhereUniqueInput>
}

export type TeamPlayersArgs = {
  take?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  cursor?: Maybe<PlayerWhereUniqueInput>
}

export type Query = {
  __typename?: 'Query'
  allCoaches?: Maybe<Array<Maybe<Coach>>>
  allPlayers?: Maybe<Array<Maybe<Player>>>
  allTeams?: Maybe<Array<Maybe<Team>>>
  allColorSchemes?: Maybe<Array<Maybe<ColorScheme>>>
  coachesByTeam?: Maybe<Array<Maybe<Coach>>>
  playersByTeam?: Maybe<Array<Maybe<Player>>>
  colorSchemeByTeam?: Maybe<Array<Maybe<ColorScheme>>>
  coach?: Maybe<Coach>
  coaches: Array<Coach>
  player?: Maybe<Player>
  players: Array<Player>
  colorScheme?: Maybe<ColorScheme>
  colorSchemes: Array<ColorScheme>
  team?: Maybe<Team>
  teams: Array<Team>
}

export type QueryCoachesByTeamArgs = {
  id?: Maybe<Scalars['Int']>
}

export type QueryPlayersByTeamArgs = {
  id?: Maybe<Scalars['Int']>
}

export type QueryColorSchemeByTeamArgs = {
  id?: Maybe<Scalars['Int']>
}

export type QueryCoachArgs = {
  where: CoachWhereUniqueInput
}

export type QueryCoachesArgs = {
  take?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  cursor?: Maybe<CoachWhereUniqueInput>
}

export type QueryPlayerArgs = {
  where: PlayerWhereUniqueInput
}

export type QueryPlayersArgs = {
  take?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  cursor?: Maybe<PlayerWhereUniqueInput>
}

export type QueryColorSchemeArgs = {
  where: ColorSchemeWhereUniqueInput
}

export type QueryColorSchemesArgs = {
  take?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  cursor?: Maybe<ColorSchemeWhereUniqueInput>
}

export type QueryTeamArgs = {
  where: TeamWhereUniqueInput
}

export type QueryTeamsArgs = {
  take?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  cursor?: Maybe<TeamWhereUniqueInput>
}

export type ColorSchemeWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>
}

export type CoachWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>
  handle?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type PlayerWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>
  handle?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
}

export type TeamWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>
  handle?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  abbreviation?: Maybe<Scalars['String']>
  logo?: Maybe<Scalars['String']>
}

export type AllCoachesQueryVariables = Exact<{ [key: string]: never }>

export type AllCoachesQuery = { __typename?: 'Query' } & {
  allCoaches?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Coach' } & Pick<Coach, 'id' | 'name'> & {
            team?: Maybe<{ __typename?: 'Team' } & Pick<Team, 'name'>>
          }
      >
    >
  >
}

export type AllColorSchemesQueryVariables = Exact<{ [key: string]: never }>

export type AllColorSchemesQuery = { __typename?: 'Query' } & {
  allColorSchemes?: Maybe<
    Array<Maybe<{ __typename?: 'ColorScheme' } & Pick<ColorScheme, 'id' | 'primary' | 'secondary' | 'teamId'>>>
  >
}

export type AllPlayersQueryVariables = Exact<{ [key: string]: never }>

export type AllPlayersQuery = { __typename?: 'Query' } & {
  allPlayers?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Player' } & Pick<Player, 'id' | 'name' | 'position' | 'number' | 'height' | 'weight'> & {
            team?: Maybe<{ __typename?: 'Team' } & Pick<Team, 'name'>>
          }
      >
    >
  >
}

export type AllTeamsQueryVariables = Exact<{ [key: string]: never }>

export type AllTeamsQuery = { __typename?: 'Query' } & {
  allTeams?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Team' } & Pick<Team, 'id' | 'name' | 'city' | 'logo'> & {
            colorScheme: Array<{ __typename?: 'ColorScheme' } & Pick<ColorScheme, 'primary' | 'secondary'>>
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
  id?: Maybe<Scalars['Int']>
}>

export type ColorSchemeByTeamQuery = { __typename?: 'Query' } & {
  colorSchemeByTeam?: Maybe<
    Array<Maybe<{ __typename?: 'ColorScheme' } & Pick<ColorScheme, 'id' | 'primary' | 'secondary'>>>
  >
}

export type PlayersByTeamQueryVariables = Exact<{
  id?: Maybe<Scalars['Int']>
}>

export type PlayersByTeamQuery = { __typename?: 'Query' } & {
  playersByTeam?: Maybe<Array<Maybe<{ __typename?: 'Player' } & Pick<Player, 'id' | 'name'>>>>
}

export const AllCoachesDocument = gql`
  query AllCoaches {
    allCoaches {
      id
      name
      team {
        name
      }
    }
  }
`
export const AllColorSchemesDocument = gql`
  query AllColorSchemes {
    allColorSchemes {
      id
      primary
      secondary
      teamId
    }
  }
`
export const AllPlayersDocument = gql`
  query AllPlayers {
    allPlayers {
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
export const AllTeamsDocument = gql`
  query AllTeams {
    allTeams {
      id
      name
      city
      logo
      colorScheme {
        primary
        secondary
      }
    }
  }
`
export const CoachesByTeamDocument = gql`
  query CoachesByTeam($id: Int) {
    coachesByTeam(id: $id) {
      id
      name
    }
  }
`
export const ColorSchemeByTeamDocument = gql`
  query ColorSchemeByTeam($id: Int) {
    colorSchemeByTeam(id: $id) {
      id
      primary
      secondary
    }
  }
`
export const PlayersByTeamDocument = gql`
  query PlayersByTeam($id: Int) {
    playersByTeam(id: $id) {
      id
      name
    }
  }
`

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (sdkFunction) => sdkFunction()
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AllCoaches(variables?: AllCoachesQueryVariables, requestHeaders?: Headers): Promise<AllCoachesQuery> {
      return withWrapper(() => client.request<AllCoachesQuery>(print(AllCoachesDocument), variables, requestHeaders))
    },
    AllColorSchemes(
      variables?: AllColorSchemesQueryVariables,
      requestHeaders?: Headers,
    ): Promise<AllColorSchemesQuery> {
      return withWrapper(() =>
        client.request<AllColorSchemesQuery>(print(AllColorSchemesDocument), variables, requestHeaders),
      )
    },
    AllPlayers(variables?: AllPlayersQueryVariables, requestHeaders?: Headers): Promise<AllPlayersQuery> {
      return withWrapper(() => client.request<AllPlayersQuery>(print(AllPlayersDocument), variables, requestHeaders))
    },
    AllTeams(variables?: AllTeamsQueryVariables, requestHeaders?: Headers): Promise<AllTeamsQuery> {
      return withWrapper(() => client.request<AllTeamsQuery>(print(AllTeamsDocument), variables, requestHeaders))
    },
    CoachesByTeam(variables?: CoachesByTeamQueryVariables, requestHeaders?: Headers): Promise<CoachesByTeamQuery> {
      return withWrapper(() =>
        client.request<CoachesByTeamQuery>(print(CoachesByTeamDocument), variables, requestHeaders),
      )
    },
    ColorSchemeByTeam(
      variables?: ColorSchemeByTeamQueryVariables,
      requestHeaders?: Headers,
    ): Promise<ColorSchemeByTeamQuery> {
      return withWrapper(() =>
        client.request<ColorSchemeByTeamQuery>(print(ColorSchemeByTeamDocument), variables, requestHeaders),
      )
    },
    PlayersByTeam(variables?: PlayersByTeamQueryVariables, requestHeaders?: Headers): Promise<PlayersByTeamQuery> {
      return withWrapper(() =>
        client.request<PlayersByTeamQuery>(print(PlayersByTeamDocument), variables, requestHeaders),
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
