import { GraphQLDateTime } from 'graphql-iso-date'
import { asNexusMethod } from 'nexus'
import { GraphQLUpload } from 'graphql-upload'

export const Upload = asNexusMethod(GraphQLUpload, 'upload')
export const DateTime = asNexusMethod(GraphQLDateTime, 'date')
