import { makeSchema } from 'nexus'
import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema'
import { join } from 'path'
import { Context } from './types'

import * as allTypes from './resolvers'

const nexusPrisma = nexusSchemaPrisma({
  experimentalCRUD: true,
  paginationStrategy: 'prisma',
  prismaClient: (ctx: Context) => ctx.prisma,
})

export const schema = makeSchema({
  types: [allTypes],
  plugins: [nexusPrisma],
  outputs: {
    typegen: join(process.cwd(), 'services/nexus/generated/index.d.ts'),
    schema: join(process.cwd(), 'services/nexus/generated/schema.graphql'),
  },
  contextType: {
    module: join(process.cwd(), 'services/nexus', 'types.ts'),
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
  prettierConfig: join(process.cwd(), 'prettier.config.js'),
})
