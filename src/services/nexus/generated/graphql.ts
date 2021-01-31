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

export type Post = {
  __typename?: 'Post'
  id: Scalars['Int']
  published: Scalars['Boolean']
  title: Scalars['String']
  content?: Maybe<Scalars['String']>
  author?: Maybe<User>
}

export type User = {
  __typename?: 'User'
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  name?: Maybe<Scalars['String']>
  email: Scalars['String']
  posts: Array<Post>
}

export type UserPostsArgs = {
  take?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  cursor?: Maybe<PostWhereUniqueInput>
}

export type AuthPayload = {
  __typename?: 'AuthPayload'
  accessToken?: Maybe<Scalars['String']>
  user?: Maybe<User>
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

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>
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

export type PostWhereInput = {
  AND?: Maybe<Array<PostWhereInput>>
  OR?: Maybe<Array<PostWhereInput>>
  NOT?: Maybe<Array<PostWhereInput>>
  id?: Maybe<IntFilter>
  published?: Maybe<BoolFilter>
  title?: Maybe<StringFilter>
  content?: Maybe<StringNullableFilter>
  authorId?: Maybe<IntNullableFilter>
  author?: Maybe<UserWhereInput>
  createdAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
}

export type PostOrderByInput = {
  id?: Maybe<SortOrder>
  published?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  content?: Maybe<SortOrder>
  authorId?: Maybe<SortOrder>
  createdAt?: Maybe<SortOrder>
  updatedAt?: Maybe<SortOrder>
}

export type CoachWhereInput = {
  AND?: Maybe<Array<CoachWhereInput>>
  OR?: Maybe<Array<CoachWhereInput>>
  NOT?: Maybe<Array<CoachWhereInput>>
  id?: Maybe<IntFilter>
  createdAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  handle?: Maybe<StringFilter>
  name?: Maybe<StringFilter>
  teamId?: Maybe<IntNullableFilter>
  type?: Maybe<StringNullableFilter>
  isAssistant?: Maybe<StringNullableFilter>
  team?: Maybe<TeamWhereInput>
}

export type CoachOrderByInput = {
  id?: Maybe<SortOrder>
  createdAt?: Maybe<SortOrder>
  updatedAt?: Maybe<SortOrder>
  handle?: Maybe<SortOrder>
  name?: Maybe<SortOrder>
  teamId?: Maybe<SortOrder>
  type?: Maybe<SortOrder>
  isAssistant?: Maybe<SortOrder>
}

export type PlayerWhereInput = {
  AND?: Maybe<Array<PlayerWhereInput>>
  OR?: Maybe<Array<PlayerWhereInput>>
  NOT?: Maybe<Array<PlayerWhereInput>>
  id?: Maybe<IntFilter>
  createdAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  handle?: Maybe<StringFilter>
  name?: Maybe<StringFilter>
  slug?: Maybe<StringFilter>
  teamId?: Maybe<IntNullableFilter>
  height?: Maybe<StringFilter>
  weight?: Maybe<StringFilter>
  number?: Maybe<StringNullableFilter>
  position?: Maybe<StringNullableFilter>
  team?: Maybe<TeamWhereInput>
}

export type PlayerOrderByInput = {
  id?: Maybe<SortOrder>
  createdAt?: Maybe<SortOrder>
  updatedAt?: Maybe<SortOrder>
  handle?: Maybe<SortOrder>
  name?: Maybe<SortOrder>
  slug?: Maybe<SortOrder>
  teamId?: Maybe<SortOrder>
  height?: Maybe<SortOrder>
  weight?: Maybe<SortOrder>
  number?: Maybe<SortOrder>
  position?: Maybe<SortOrder>
}

export type TeamWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>
  handle?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  abbreviation?: Maybe<Scalars['String']>
  logo?: Maybe<Scalars['String']>
}

export type TeamWhereInput = {
  AND?: Maybe<Array<TeamWhereInput>>
  OR?: Maybe<Array<TeamWhereInput>>
  NOT?: Maybe<Array<TeamWhereInput>>
  id?: Maybe<IntFilter>
  createdAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  handle?: Maybe<StringFilter>
  name?: Maybe<StringFilter>
  slug?: Maybe<StringFilter>
  city?: Maybe<StringFilter>
  abbreviation?: Maybe<StringFilter>
  logo?: Maybe<StringFilter>
  wins?: Maybe<IntNullableFilter>
  losses?: Maybe<IntNullableFilter>
  winPercentage?: Maybe<FloatNullableFilter>
  conference?: Maybe<StringFilter>
  division?: Maybe<StringFilter>
  established?: Maybe<StringFilter>
  primaryColor?: Maybe<StringFilter>
  secondaryColor?: Maybe<StringFilter>
  coaches?: Maybe<CoachListRelationFilter>
  players?: Maybe<PlayerListRelationFilter>
  colorScheme?: Maybe<ColorSchemeListRelationFilter>
}

export type TeamOrderByInput = {
  id?: Maybe<SortOrder>
  createdAt?: Maybe<SortOrder>
  updatedAt?: Maybe<SortOrder>
  handle?: Maybe<SortOrder>
  name?: Maybe<SortOrder>
  slug?: Maybe<SortOrder>
  city?: Maybe<SortOrder>
  abbreviation?: Maybe<SortOrder>
  logo?: Maybe<SortOrder>
  wins?: Maybe<SortOrder>
  losses?: Maybe<SortOrder>
  winPercentage?: Maybe<SortOrder>
  conference?: Maybe<SortOrder>
  division?: Maybe<SortOrder>
  established?: Maybe<SortOrder>
  primaryColor?: Maybe<SortOrder>
  secondaryColor?: Maybe<SortOrder>
}

export type ColorSchemeWhereInput = {
  AND?: Maybe<Array<ColorSchemeWhereInput>>
  OR?: Maybe<Array<ColorSchemeWhereInput>>
  NOT?: Maybe<Array<ColorSchemeWhereInput>>
  id?: Maybe<IntFilter>
  createdAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  primary?: Maybe<StringFilter>
  secondary?: Maybe<StringFilter>
  teamId?: Maybe<IntNullableFilter>
  team?: Maybe<TeamWhereInput>
}

export type ColorSchemeOrderByInput = {
  id?: Maybe<SortOrder>
  createdAt?: Maybe<SortOrder>
  updatedAt?: Maybe<SortOrder>
  primary?: Maybe<SortOrder>
  secondary?: Maybe<SortOrder>
  teamId?: Maybe<SortOrder>
}

export type PostCreateInput = {
  published?: Maybe<Scalars['Boolean']>
  title: Scalars['String']
  content?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  author?: Maybe<UserCreateOneWithoutPostsInput>
}

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Scalars['Int']>>
  notIn?: Maybe<Array<Scalars['Int']>>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  not?: Maybe<NestedIntFilter>
}

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>
  not?: Maybe<NestedBoolFilter>
}

export type StringFilter = {
  equals?: Maybe<Scalars['String']>
  in?: Maybe<Array<Scalars['String']>>
  notIn?: Maybe<Array<Scalars['String']>>
  lt?: Maybe<Scalars['String']>
  lte?: Maybe<Scalars['String']>
  gt?: Maybe<Scalars['String']>
  gte?: Maybe<Scalars['String']>
  contains?: Maybe<Scalars['String']>
  startsWith?: Maybe<Scalars['String']>
  endsWith?: Maybe<Scalars['String']>
  mode?: Maybe<QueryMode>
  not?: Maybe<NestedStringFilter>
}

export type StringNullableFilter = {
  equals?: Maybe<Scalars['String']>
  in?: Maybe<Array<Scalars['String']>>
  notIn?: Maybe<Array<Scalars['String']>>
  lt?: Maybe<Scalars['String']>
  lte?: Maybe<Scalars['String']>
  gt?: Maybe<Scalars['String']>
  gte?: Maybe<Scalars['String']>
  contains?: Maybe<Scalars['String']>
  startsWith?: Maybe<Scalars['String']>
  endsWith?: Maybe<Scalars['String']>
  mode?: Maybe<QueryMode>
  not?: Maybe<NestedStringNullableFilter>
}

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Scalars['Int']>>
  notIn?: Maybe<Array<Scalars['Int']>>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  not?: Maybe<NestedIntNullableFilter>
}

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>
  OR?: Maybe<Array<UserWhereInput>>
  NOT?: Maybe<Array<UserWhereInput>>
  id?: Maybe<IntFilter>
  email?: Maybe<StringFilter>
  password?: Maybe<StringFilter>
  name?: Maybe<StringNullableFilter>
  posts?: Maybe<PostListRelationFilter>
  createdAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
}

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>
  in?: Maybe<Array<Scalars['DateTime']>>
  notIn?: Maybe<Array<Scalars['DateTime']>>
  lt?: Maybe<Scalars['DateTime']>
  lte?: Maybe<Scalars['DateTime']>
  gt?: Maybe<Scalars['DateTime']>
  gte?: Maybe<Scalars['DateTime']>
  not?: Maybe<NestedDateTimeFilter>
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type FloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>
  in?: Maybe<Array<Scalars['Float']>>
  notIn?: Maybe<Array<Scalars['Float']>>
  lt?: Maybe<Scalars['Float']>
  lte?: Maybe<Scalars['Float']>
  gt?: Maybe<Scalars['Float']>
  gte?: Maybe<Scalars['Float']>
  not?: Maybe<NestedFloatNullableFilter>
}

export type CoachListRelationFilter = {
  every?: Maybe<CoachWhereInput>
  some?: Maybe<CoachWhereInput>
  none?: Maybe<CoachWhereInput>
}

export type PlayerListRelationFilter = {
  every?: Maybe<PlayerWhereInput>
  some?: Maybe<PlayerWhereInput>
  none?: Maybe<PlayerWhereInput>
}

export type ColorSchemeListRelationFilter = {
  every?: Maybe<ColorSchemeWhereInput>
  some?: Maybe<ColorSchemeWhereInput>
  none?: Maybe<ColorSchemeWhereInput>
}

export type UserCreateOneWithoutPostsInput = {
  create?: Maybe<UserCreateWithoutPostsInput>
  connect?: Maybe<UserWhereUniqueInput>
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutpostsInput>
}

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Scalars['Int']>>
  notIn?: Maybe<Array<Scalars['Int']>>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  not?: Maybe<NestedIntFilter>
}

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>
  not?: Maybe<NestedBoolFilter>
}

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>
  in?: Maybe<Array<Scalars['String']>>
  notIn?: Maybe<Array<Scalars['String']>>
  lt?: Maybe<Scalars['String']>
  lte?: Maybe<Scalars['String']>
  gt?: Maybe<Scalars['String']>
  gte?: Maybe<Scalars['String']>
  contains?: Maybe<Scalars['String']>
  startsWith?: Maybe<Scalars['String']>
  endsWith?: Maybe<Scalars['String']>
  not?: Maybe<NestedStringFilter>
}

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>
  in?: Maybe<Array<Scalars['String']>>
  notIn?: Maybe<Array<Scalars['String']>>
  lt?: Maybe<Scalars['String']>
  lte?: Maybe<Scalars['String']>
  gt?: Maybe<Scalars['String']>
  gte?: Maybe<Scalars['String']>
  contains?: Maybe<Scalars['String']>
  startsWith?: Maybe<Scalars['String']>
  endsWith?: Maybe<Scalars['String']>
  not?: Maybe<NestedStringNullableFilter>
}

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Scalars['Int']>>
  notIn?: Maybe<Array<Scalars['Int']>>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  not?: Maybe<NestedIntNullableFilter>
}

export type PostListRelationFilter = {
  every?: Maybe<PostWhereInput>
  some?: Maybe<PostWhereInput>
  none?: Maybe<PostWhereInput>
}

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>
  in?: Maybe<Array<Scalars['DateTime']>>
  notIn?: Maybe<Array<Scalars['DateTime']>>
  lt?: Maybe<Scalars['DateTime']>
  lte?: Maybe<Scalars['DateTime']>
  gt?: Maybe<Scalars['DateTime']>
  gte?: Maybe<Scalars['DateTime']>
  not?: Maybe<NestedDateTimeFilter>
}

export type NestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>
  in?: Maybe<Array<Scalars['Float']>>
  notIn?: Maybe<Array<Scalars['Float']>>
  lt?: Maybe<Scalars['Float']>
  lte?: Maybe<Scalars['Float']>
  gt?: Maybe<Scalars['Float']>
  gte?: Maybe<Scalars['Float']>
  not?: Maybe<NestedFloatNullableFilter>
}

export type UserCreateWithoutPostsInput = {
  email: Scalars['String']
  password: Scalars['String']
  name?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>
  email?: Maybe<Scalars['String']>
}

export type UserCreateOrConnectWithoutpostsInput = {
  where: UserWhereUniqueInput
  create: UserCreateWithoutPostsInput
}

export type Query = {
  __typename?: 'Query'
  me?: Maybe<User>
  posts: Array<Post>
  post?: Maybe<Post>
  coach?: Maybe<Coach>
  coaches: Array<Coach>
  allCoaches?: Maybe<Array<Maybe<Coach>>>
  coachesByTeam?: Maybe<Array<Maybe<Coach>>>
  player?: Maybe<Player>
  players: Array<Player>
  allPlayers?: Maybe<Array<Maybe<Player>>>
  playersByTeam?: Maybe<Array<Maybe<Player>>>
  team?: Maybe<Team>
  teams: Array<Team>
  allTeams?: Maybe<Array<Maybe<Team>>>
  colorScheme?: Maybe<ColorScheme>
  colorSchemes: Array<ColorScheme>
  allColorSchemes?: Maybe<Array<Maybe<ColorScheme>>>
  colorSchemeByTeam?: Maybe<Array<Maybe<ColorScheme>>>
}

export type QueryPostsArgs = {
  where?: Maybe<PostWhereInput>
  orderBy?: Maybe<Array<PostOrderByInput>>
  take?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  cursor?: Maybe<PostWhereUniqueInput>
}

export type QueryPostArgs = {
  where: PostWhereUniqueInput
}

export type QueryCoachArgs = {
  where: CoachWhereUniqueInput
}

export type QueryCoachesArgs = {
  where?: Maybe<CoachWhereInput>
  orderBy?: Maybe<Array<CoachOrderByInput>>
  take?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  cursor?: Maybe<CoachWhereUniqueInput>
}

export type QueryCoachesByTeamArgs = {
  id?: Maybe<Scalars['Int']>
}

export type QueryPlayerArgs = {
  where: PlayerWhereUniqueInput
}

export type QueryPlayersArgs = {
  where?: Maybe<PlayerWhereInput>
  orderBy?: Maybe<Array<PlayerOrderByInput>>
  take?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  cursor?: Maybe<PlayerWhereUniqueInput>
}

export type QueryPlayersByTeamArgs = {
  id?: Maybe<Scalars['Int']>
}

export type QueryTeamArgs = {
  where: TeamWhereUniqueInput
}

export type QueryTeamsArgs = {
  where?: Maybe<TeamWhereInput>
  orderBy?: Maybe<Array<TeamOrderByInput>>
  take?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  cursor?: Maybe<TeamWhereUniqueInput>
}

export type QueryColorSchemeArgs = {
  where: ColorSchemeWhereUniqueInput
}

export type QueryColorSchemesArgs = {
  where?: Maybe<ColorSchemeWhereInput>
  orderBy?: Maybe<Array<ColorSchemeOrderByInput>>
  take?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  cursor?: Maybe<ColorSchemeWhereUniqueInput>
}

export type QueryColorSchemeByTeamArgs = {
  id?: Maybe<Scalars['Int']>
}

export type Mutation = {
  __typename?: 'Mutation'
  createDraft: Post
  deletePost?: Maybe<Post>
  publish?: Maybe<Post>
  signup?: Maybe<AuthPayload>
  login?: Maybe<AuthPayload>
}

export type MutationCreateDraftArgs = {
  data: PostCreateInput
}

export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput
}

export type MutationPublishArgs = {
  id: Scalars['Int']
}

export type MutationSignupArgs = {
  name?: Maybe<Scalars['String']>
  email: Scalars['String']
  password: Scalars['String']
}

export type MutationLoginArgs = {
  email: Scalars['String']
  password: Scalars['String']
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

export type AllPostsQueryVariables = Exact<{ [key: string]: never }>

export type AllPostsQuery = { __typename?: 'Query' } & {
  posts: Array<
    { __typename?: 'Post' } & Pick<Post, 'id' | 'title' | 'content' | 'published'> & {
        author?: Maybe<{ __typename?: 'User' } & Pick<User, 'id' | 'name' | 'email'>>
      }
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
export const AllPostsDocument = gql`
  query AllPosts {
    posts {
      id
      title
      content
      published
      author {
        id
        name
        email
      }
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
    AllPosts(variables?: AllPostsQueryVariables, requestHeaders?: Headers): Promise<AllPostsQuery> {
      return withWrapper(() => client.request<AllPostsQuery>(print(AllPostsDocument), variables, requestHeaders))
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
