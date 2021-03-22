import { asNexusMethod } from 'nexus'
import { GraphQLUpload } from 'graphql-upload'

export * from 'nexus-prisma/scalars'

export const Upload = asNexusMethod(GraphQLUpload, 'upload')
