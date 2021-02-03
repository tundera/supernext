import { DateTimeResolver, JSONObjectResolver } from 'graphql-scalars'
import { asNexusMethod } from 'nexus'
import { GraphQLUpload } from 'graphql-upload'

export const uploadScalar = asNexusMethod(GraphQLUpload, 'upload')
export const jsonScalar = asNexusMethod(JSONObjectResolver, 'json')
export const dateTimeScalar = asNexusMethod(DateTimeResolver, 'date')
