/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import { Context as ctx } from './../types'
import { core } from 'nexus'
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * The `Upload` scalar type represents a file upload.
     */
    upload<FieldName extends string>(
      fieldName: FieldName,
      opts?: core.CommonInputFieldConfig<TypeName, FieldName>,
    ): void // "Upload";
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(
      fieldName: FieldName,
      opts?: core.CommonInputFieldConfig<TypeName, FieldName>,
    ): void // "DateTime";
    /**
     * The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
     */
    json<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Json";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * The `Upload` scalar type represents a file upload.
     */
    upload<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Upload";
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
    /**
     * The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
     */
    json<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Json";
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CoachOrderByInput: {
    // input type
    name: NexusGenEnums['SortOrder'] // SortOrder!
  }
  CoachWhereInput: {
    // input type
    id: number // Int!
    name: NexusGenInputs['StringFilter'] // StringFilter!
  }
  CoachWhereUniqueInput: {
    // input type
    id: number // Int!
  }
  IntFilter: {
    // input type
    contains: number // Int!
    endsWith: number // Int!
    equals: number // Int!
    gt: number // Int!
    gte: number // Int!
    in: number[] // [Int!]!
    lt: number // Int!
    lte: number // Int!
    notIn: number[] // [Int!]!
    startsWith: number // Int!
  }
  PlayerOrderByInput: {
    // input type
    name: NexusGenEnums['SortOrder'] // SortOrder!
  }
  PlayerWhereInput: {
    // input type
    id: number // Int!
    name: NexusGenInputs['StringFilter'] // StringFilter!
  }
  PlayerWhereUniqueInput: {
    // input type
    id: number // Int!
  }
  StringFilter: {
    // input type
    contains: string // String!
    endsWith: string // String!
    equals: string // String!
    gt: string // String!
    gte: string // String!
    in: string[] // [String!]!
    lt: string // String!
    lte: string // String!
    notIn: string[] // [String!]!
    startsWith: string // String!
  }
  TeamOrderByInput: {
    // input type
    slug: NexusGenEnums['SortOrder'] // SortOrder!
  }
  TeamWhereInput: {
    // input type
    id: number // Int!
    slug: NexusGenInputs['StringFilter'] // StringFilter!
  }
  TeamWhereUniqueInput: {
    // input type
    id: number // Int!
  }
}

export interface NexusGenEnums {
  SortOrder: 'asc' | 'desc'
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
  Json: any
  Upload: any
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
    logoSlug: string // String!
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

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

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
    coaches: Array<NexusGenRootTypes['Coach'] | null> | null // [Coach]
    coachesByTeam: Array<NexusGenRootTypes['Coach'] | null> | null // [Coach]
    colorSchemeByTeam: NexusGenRootTypes['ColorScheme'] | null // ColorScheme
    colorSchemes: Array<NexusGenRootTypes['ColorScheme'] | null> | null // [ColorScheme]
    players: Array<NexusGenRootTypes['Player'] | null> | null // [Player]
    playersByTeam: Array<NexusGenRootTypes['Player'] | null> | null // [Player]
    team: NexusGenRootTypes['Team'] | null // Team
    teams: Array<NexusGenRootTypes['Team'] | null> | null // [Team]
  }
  Team: {
    // field return type
    abbreviation: string // String!
    city: string // String!
    coaches: NexusGenRootTypes['Coach'][] // [Coach!]!
    colorScheme: NexusGenRootTypes['ColorScheme'] | null // ColorScheme
    conference: string // String!
    createdAt: NexusGenScalars['DateTime'] // DateTime!
    division: string // String!
    established: string // String!
    handle: string // String!
    id: number // Int!
    logo: string // String!
    logoSlug: string // String!
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
    coaches: 'Coach'
    coachesByTeam: 'Coach'
    colorSchemeByTeam: 'ColorScheme'
    colorSchemes: 'ColorScheme'
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
    logoSlug: 'String'
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
    coachesByTeam: {
      // args
      id?: number | null // Int
    }
    colorSchemeByTeam: {
      // args
      id?: number | null // Int
    }
    playersByTeam: {
      // args
      id?: number | null // Int
    }
    team: {
      // args
      slug?: string | null // String
    }
  }
  Team: {
    coaches: {
      // args
      cursor?: NexusGenInputs['CoachWhereUniqueInput'] | null // CoachWhereUniqueInput
      orderBy?: NexusGenInputs['CoachOrderByInput'] | null // CoachOrderByInput
      skip?: number | null // Int
      take?: number | null // Int
      where?: NexusGenInputs['CoachWhereInput'] | null // CoachWhereInput
    }
    players: {
      // args
      cursor?: NexusGenInputs['PlayerWhereUniqueInput'] | null // PlayerWhereUniqueInput
      orderBy?: NexusGenInputs['PlayerOrderByInput'] | null // PlayerOrderByInput
      skip?: number | null // Int
      take?: number | null // Int
      where?: NexusGenInputs['PlayerWhereInput'] | null // PlayerWhereInput
    }
  }
}

export interface NexusGenAbstractTypeMembers {}

export interface NexusGenTypeInterfaces {}

export type NexusGenObjectNames = keyof NexusGenObjects

export type NexusGenInputNames = keyof NexusGenInputs

export type NexusGenEnumNames = keyof NexusGenEnums

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
  context: ctx
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
