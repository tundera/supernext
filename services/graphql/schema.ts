import { makeSchema } from 'nexus'
import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema'
import { join } from 'path'
import { Context } from './types'

import * as moduleTypes from './modules'
import * as scalarTypes from './scalars'

import prettierConfig from '../../prettier.config'

const cwd = process.cwd()

const nexusPrisma = nexusSchemaPrisma({
  experimentalCRUD: true,
  paginationStrategy: 'prisma',
  prismaClient: (ctx: Context) => ctx.prisma,
})

export const schema = makeSchema({
  types: [moduleTypes, scalarTypes],
  plugins: [nexusPrisma],
  outputs: {
    typegen: join(cwd, 'services/graphql/generated/index.d.ts'),
    schema: join(cwd, 'services/graphql/generated/schema.graphql'),
  },
  contextType: {
    module: join(cwd, 'services/graphql', 'types.ts'),
    export: 'Context',
    alias: 'ctx',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
  prettierConfig,
})
