/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import { Context } from '../context'

declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CoachWhereUniqueInput: {
    // input type
    handle?: string | null // String
    id?: number | null // Int
    name?: string | null // String
  }
  ColorSchemeWhereUniqueInput: {
    // input type
    id?: number | null // Int
  }
  PlayerWhereUniqueInput: {
    // input type
    handle?: string | null // String
    id?: number | null // Int
    name?: string | null // String
    slug?: string | null // String
  }
  TeamWhereUniqueInput: {
    // input type
    abbreviation?: string | null // String
    handle?: string | null // String
    id?: number | null // Int
    logo?: string | null // String
    name?: string | null // String
    slug?: string | null // String
  }
}

export interface NexusGenEnums {}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  Coach: {
    // root type
    createdAt: NexusGenScalars['DateTime'] // DateTime!
    handle: string // String!
    id: number // Int!
    isAssistant?: string | null // String
    name: string // String!
    teamId?: number | null // Int
    type?: string | null // String
    updatedAt: NexusGenScalars['DateTime'] // DateTime!
  }
  ColorScheme: {
    // root type
    createdAt: NexusGenScalars['DateTime'] // DateTime!
    id: number // Int!
    primary: string // String!
    secondary: string // String!
    teamId?: number | null // Int
    updatedAt: NexusGenScalars['DateTime'] // DateTime!
  }
  Player: {
    // root type
    createdAt: NexusGenScalars['DateTime'] // DateTime!
    handle: string // String!
    height: string // String!
    id: number // Int!
    name: string // String!
    number?: string | null // String
    position?: string | null // String
    slug: string // String!
    teamId?: number | null // Int
    updatedAt: NexusGenScalars['DateTime'] // DateTime!
    weight: string // String!
  }
  Query: {}
  Team: {
    // root type
    abbreviation: string // String!
    city: string // String!
    conference: string // String!
    createdAt: NexusGenScalars['DateTime'] // DateTime!
    division: string // String!
    established: string // String!
    handle: string // String!
    id: number // Int!
    logo: string // String!
    losses?: number | null // Int
    name: string // String!
    slug: string // String!
    updatedAt: NexusGenScalars['DateTime'] // DateTime!
    winPercentage?: number | null // Float
    wins?: number | null // Int
  }
}

export interface NexusGenInterfaces {}

export interface NexusGenUnions {}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Coach: {
    // field return type
    createdAt: NexusGenScalars['DateTime'] // DateTime!
    handle: string // String!
    id: number // Int!
    isAssistant: string | null // String
    name: string // String!
    team: NexusGenRootTypes['Team'] | null // Team
    teamId: number | null // Int
    type: string | null // String
    updatedAt: NexusGenScalars['DateTime'] // DateTime!
  }
  ColorScheme: {
    // field return type
    createdAt: NexusGenScalars['DateTime'] // DateTime!
    id: number // Int!
    primary: string // String!
    secondary: string // String!
    team: NexusGenRootTypes['Team'] | null // Team
    teamId: number | null // Int
    updatedAt: NexusGenScalars['DateTime'] // DateTime!
  }
  Player: {
    // field return type
    createdAt: NexusGenScalars['DateTime'] // DateTime!
    handle: string // String!
    height: string // String!
    id: number // Int!
    name: string // String!
    number: string | null // String
    position: string | null // String
    slug: string // String!
    team: NexusGenRootTypes['Team'] | null // Team
    teamId: number | null // Int
    updatedAt: NexusGenScalars['DateTime'] // DateTime!
    weight: string // String!
  }
  Query: {
    // field return type
    allCoaches: Array<NexusGenRootTypes['Coach'] | null> | null // [Coach]
    allColorSchemes: Array<NexusGenRootTypes['ColorScheme'] | null> | null // [ColorScheme]
    allPlayers: Array<NexusGenRootTypes['Player'] | null> | null // [Player]
    allTeams: Array<NexusGenRootTypes['Team'] | null> | null // [Team]
    coach: NexusGenRootTypes['Coach'] | null // Coach
    coaches: NexusGenRootTypes['Coach'][] // [Coach!]!
    coachesByTeam: Array<NexusGenRootTypes['Coach'] | null> | null // [Coach]
    colorScheme: NexusGenRootTypes['ColorScheme'] | null // ColorScheme
    colorSchemeByTeam: Array<NexusGenRootTypes['ColorScheme'] | null> | null // [ColorScheme]
    colorSchemes: NexusGenRootTypes['ColorScheme'][] // [ColorScheme!]!
    player: NexusGenRootTypes['Player'] | null // Player
    players: NexusGenRootTypes['Player'][] // [Player!]!
    playersByTeam: Array<NexusGenRootTypes['Player'] | null> | null // [Player]
    team: NexusGenRootTypes['Team'] | null // Team
    teams: NexusGenRootTypes['Team'][] // [Team!]!
  }
  Team: {
    // field return type
    abbreviation: string // String!
    city: string // String!
    coaches: NexusGenRootTypes['Coach'][] // [Coach!]!
    colorScheme: NexusGenRootTypes['ColorScheme'][] // [ColorScheme!]!
    conference: string // String!
    createdAt: NexusGenScalars['DateTime'] // DateTime!
    division: string // String!
    established: string // String!
    handle: string // String!
    id: number // Int!
    logo: string // String!
    losses: number | null // Int
    name: string // String!
    players: NexusGenRootTypes['Player'][] // [Player!]!
    slug: string // String!
    updatedAt: NexusGenScalars['DateTime'] // DateTime!
    winPercentage: number | null // Float
    wins: number | null // Int
  }
}

export interface NexusGenFieldTypeNames {
  Coach: {
    // field return type name
    createdAt: 'DateTime'
    handle: 'String'
    id: 'Int'
    isAssistant: 'String'
    name: 'String'
    team: 'Team'
    teamId: 'Int'
    type: 'String'
    updatedAt: 'DateTime'
  }
  ColorScheme: {
    // field return type name
    createdAt: 'DateTime'
    id: 'Int'
    primary: 'String'
    secondary: 'String'
    team: 'Team'
    teamId: 'Int'
    updatedAt: 'DateTime'
  }
  Player: {
    // field return type name
    createdAt: 'DateTime'
    handle: 'String'
    height: 'String'
    id: 'Int'
    name: 'String'
    number: 'String'
    position: 'String'
    slug: 'String'
    team: 'Team'
    teamId: 'Int'
    updatedAt: 'DateTime'
    weight: 'String'
  }
  Query: {
    // field return type name
    allCoaches: 'Coach'
    allColorSchemes: 'ColorScheme'
    allPlayers: 'Player'
    allTeams: 'Team'
    coach: 'Coach'
    coaches: 'Coach'
    coachesByTeam: 'Coach'
    colorScheme: 'ColorScheme'
    colorSchemeByTeam: 'ColorScheme'
    colorSchemes: 'ColorScheme'
    player: 'Player'
    players: 'Player'
    playersByTeam: 'Player'
    team: 'Team'
    teams: 'Team'
  }
  Team: {
    // field return type name
    abbreviation: 'String'
    city: 'String'
    coaches: 'Coach'
    colorScheme: 'ColorScheme'
    conference: 'String'
    createdAt: 'DateTime'
    division: 'String'
    established: 'String'
    handle: 'String'
    id: 'Int'
    logo: 'String'
    losses: 'Int'
    name: 'String'
    players: 'Player'
    slug: 'String'
    updatedAt: 'DateTime'
    winPercentage: 'Float'
    wins: 'Int'
  }
}

export interface NexusGenArgTypes {
  Query: {
    coach: {
      // args
      where: NexusGenInputs['CoachWhereUniqueInput'] // CoachWhereUniqueInput!
    }
    coaches: {
      // args
      after?: NexusGenInputs['CoachWhereUniqueInput'] | null // CoachWhereUniqueInput
      before?: NexusGenInputs['CoachWhereUniqueInput'] | null // CoachWhereUniqueInput
      first?: number | null // Int
      last?: number | null // Int
    }
    coachesByTeam: {
      // args
      id?: number | null // Int
    }
    colorScheme: {
      // args
      where: NexusGenInputs['ColorSchemeWhereUniqueInput'] // ColorSchemeWhereUniqueInput!
    }
    colorSchemeByTeam: {
      // args
      id?: number | null // Int
    }
    colorSchemes: {
      // args
      after?: NexusGenInputs['ColorSchemeWhereUniqueInput'] | null // ColorSchemeWhereUniqueInput
      before?: NexusGenInputs['ColorSchemeWhereUniqueInput'] | null // ColorSchemeWhereUniqueInput
      first?: number | null // Int
      last?: number | null // Int
    }
    player: {
      // args
      where: NexusGenInputs['PlayerWhereUniqueInput'] // PlayerWhereUniqueInput!
    }
    players: {
      // args
      after?: NexusGenInputs['PlayerWhereUniqueInput'] | null // PlayerWhereUniqueInput
      before?: NexusGenInputs['PlayerWhereUniqueInput'] | null // PlayerWhereUniqueInput
      first?: number | null // Int
      last?: number | null // Int
    }
    playersByTeam: {
      // args
      id?: number | null // Int
    }
    team: {
      // args
      where: NexusGenInputs['TeamWhereUniqueInput'] // TeamWhereUniqueInput!
    }
    teams: {
      // args
      after?: NexusGenInputs['TeamWhereUniqueInput'] | null // TeamWhereUniqueInput
      before?: NexusGenInputs['TeamWhereUniqueInput'] | null // TeamWhereUniqueInput
      first?: number | null // Int
      last?: number | null // Int
    }
  }
  Team: {
    coaches: {
      // args
      after?: NexusGenInputs['CoachWhereUniqueInput'] | null // CoachWhereUniqueInput
      before?: NexusGenInputs['CoachWhereUniqueInput'] | null // CoachWhereUniqueInput
      first?: number | null // Int
      last?: number | null // Int
    }
    colorScheme: {
      // args
      after?: NexusGenInputs['ColorSchemeWhereUniqueInput'] | null // ColorSchemeWhereUniqueInput
      before?: NexusGenInputs['ColorSchemeWhereUniqueInput'] | null // ColorSchemeWhereUniqueInput
      first?: number | null // Int
      last?: number | null // Int
    }
    players: {
      // args
      after?: NexusGenInputs['PlayerWhereUniqueInput'] | null // PlayerWhereUniqueInput
      before?: NexusGenInputs['PlayerWhereUniqueInput'] | null // PlayerWhereUniqueInput
      first?: number | null // Int
      last?: number | null // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {}

export interface NexusGenTypeInterfaces {}

export type NexusGenObjectNames = keyof NexusGenObjects

export type NexusGenInputNames = keyof NexusGenInputs

export type NexusGenEnumNames = never

export type NexusGenInterfaceNames = never

export type NexusGenScalarNames = keyof NexusGenScalars

export type NexusGenUnionNames = never

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never

export type NexusGenAbstractsUsingStrategyResolveType = never

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context
  inputTypes: NexusGenInputs
  rootTypes: NexusGenRootTypes
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars
  argTypes: NexusGenArgTypes
  fieldTypes: NexusGenFieldTypes
  fieldTypeNames: NexusGenFieldTypeNames
  allTypes: NexusGenAllTypes
  typeInterfaces: NexusGenTypeInterfaces
  objectNames: NexusGenObjectNames
  inputNames: NexusGenInputNames
  enumNames: NexusGenEnumNames
  interfaceNames: NexusGenInterfaceNames
  scalarNames: NexusGenScalarNames
  unionNames: NexusGenUnionNames
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames']
  allOutputTypes:
    | NexusGenTypes['objectNames']
    | NexusGenTypes['enumNames']
    | NexusGenTypes['unionNames']
    | NexusGenTypes['interfaceNames']
    | NexusGenTypes['scalarNames']
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames']
  abstractTypeMembers: NexusGenAbstractTypeMembers
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType
  features: NexusGenFeaturesConfig
}

declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {}
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {}
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {}
  interface NexusGenPluginSchemaConfig {}
  interface NexusGenPluginArgConfig {}
}
