import { GraphQLClient } from 'graphql-request'
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

export type Team = {
  __typename?: 'Team'
  id: Scalars['Int']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  handle: Scalars['String']
  name: Scalars['String']
  slug: Scalars['String']
  city: Scalars['String']
  abbreviation: Scalars['String']
  primaryColor: Scalars['String']
  secondaryColor: Scalars['String']
  wins?: Maybe<Scalars['Int']>
  losses?: Maybe<Scalars['Int']>
  winPercentage?: Maybe<Scalars['Float']>
  conference: Scalars['String']
  division: Scalars['String']
  established: Scalars['String']
  coaches: Array<Coach>
  players: Array<Player>
}

export type TeamCoachesArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<CoachWhereUniqueInput>
  after?: Maybe<CoachWhereUniqueInput>
}

export type TeamPlayersArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<PlayerWhereUniqueInput>
  after?: Maybe<PlayerWhereUniqueInput>
}

export type Query = {
  __typename?: 'Query'
  allCoaches?: Maybe<Array<Maybe<Coach>>>
  allPlayers?: Maybe<Array<Maybe<Player>>>
  allTeams?: Maybe<Array<Maybe<Team>>>
  coachesByTeam?: Maybe<Array<Maybe<Coach>>>
  playersByTeam?: Maybe<Array<Maybe<Player>>>
  coach?: Maybe<Coach>
  coaches: Array<Coach>
  player?: Maybe<Player>
  players: Array<Player>
  team?: Maybe<Team>
  teams: Array<Team>
}

export type QueryCoachesByTeamArgs = {
  id?: Maybe<Scalars['Int']>
}

export type QueryPlayersByTeamArgs = {
  id?: Maybe<Scalars['Int']>
}

export type QueryCoachArgs = {
  where: CoachWhereUniqueInput
}

export type QueryCoachesArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<CoachWhereUniqueInput>
  after?: Maybe<CoachWhereUniqueInput>
}

export type QueryPlayerArgs = {
  where: PlayerWhereUniqueInput
}

export type QueryPlayersArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<PlayerWhereUniqueInput>
  after?: Maybe<PlayerWhereUniqueInput>
}

export type QueryTeamArgs = {
  where: TeamWhereUniqueInput
}

export type QueryTeamsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<TeamWhereUniqueInput>
  after?: Maybe<TeamWhereUniqueInput>
}

export type CoachWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>
  handle?: Maybe<Scalars['String']>
}

export type PlayerWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>
  handle?: Maybe<Scalars['String']>
}

export type TeamWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>
  handle?: Maybe<Scalars['String']>
}

export type CoachesQueryQueryVariables = Exact<{ [key: string]: never }>

export type CoachesQueryQuery = { __typename?: 'Query' } & {
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

export type CoachesByTeamQueryQueryVariables = Exact<{
  id?: Maybe<Scalars['Int']>
}>

export type CoachesByTeamQueryQuery = { __typename?: 'Query' } & {
  coachesByTeam?: Maybe<Array<Maybe<{ __typename?: 'Coach' } & Pick<Coach, 'id' | 'name'>>>>
}

export type PlayersQueryQueryVariables = Exact<{ [key: string]: never }>

export type PlayersQueryQuery = { __typename?: 'Query' } & {
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

export type PlayersByTeamQueryQueryVariables = Exact<{
  id?: Maybe<Scalars['Int']>
}>

export type PlayersByTeamQueryQuery = { __typename?: 'Query' } & {
  playersByTeam?: Maybe<Array<Maybe<{ __typename?: 'Player' } & Pick<Player, 'id' | 'name'>>>>
}

export type TeamsQueryQueryVariables = Exact<{ [key: string]: never }>

export type TeamsQueryQuery = { __typename?: 'Query' } & {
  allTeams?: Maybe<Array<Maybe<{ __typename?: 'Team' } & Pick<Team, 'id' | 'name' | 'city'>>>>
}

export const CoachesQueryDocument = gql`
  query CoachesQuery {
    allCoaches {
      id
      name
      team {
        name
      }
    }
  }
`
export const CoachesByTeamQueryDocument = gql`
  query CoachesByTeamQuery($id: Int) {
    coachesByTeam(id: $id) {
      id
      name
    }
  }
`
export const PlayersQueryDocument = gql`
  query PlayersQuery {
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
export const PlayersByTeamQueryDocument = gql`
  query PlayersByTeamQuery($id: Int) {
    playersByTeam(id: $id) {
      id
      name
    }
  }
`
export const TeamsQueryDocument = gql`
  query TeamsQuery {
    allTeams {
      id
      name
      city
    }
  }
`

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (sdkFunction) => sdkFunction()
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    CoachesQuery(variables?: CoachesQueryQueryVariables, requestHeaders?: Headers): Promise<CoachesQueryQuery> {
      return withWrapper(() =>
        client.request<CoachesQueryQuery>(print(CoachesQueryDocument), variables, requestHeaders),
      )
    },
    CoachesByTeamQuery(
      variables?: CoachesByTeamQueryQueryVariables,
      requestHeaders?: Headers,
    ): Promise<CoachesByTeamQueryQuery> {
      return withWrapper(() =>
        client.request<CoachesByTeamQueryQuery>(print(CoachesByTeamQueryDocument), variables, requestHeaders),
      )
    },
    PlayersQuery(variables?: PlayersQueryQueryVariables, requestHeaders?: Headers): Promise<PlayersQueryQuery> {
      return withWrapper(() =>
        client.request<PlayersQueryQuery>(print(PlayersQueryDocument), variables, requestHeaders),
      )
    },
    PlayersByTeamQuery(
      variables?: PlayersByTeamQueryQueryVariables,
      requestHeaders?: Headers,
    ): Promise<PlayersByTeamQueryQuery> {
      return withWrapper(() =>
        client.request<PlayersByTeamQueryQuery>(print(PlayersByTeamQueryDocument), variables, requestHeaders),
      )
    },
    TeamsQuery(variables?: TeamsQueryQueryVariables, requestHeaders?: Headers): Promise<TeamsQueryQuery> {
      return withWrapper(() => client.request<TeamsQueryQuery>(print(TeamsQueryDocument), variables, requestHeaders))
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
