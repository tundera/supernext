import { makeSchema } from 'nexus'
import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema'
import { join } from 'path'
import { Context } from '../context'

import * as allTypes from './Query'

const nexusPrisma = nexusSchemaPrisma({
  experimentalCRUD: true,
  paginationStrategy: 'prisma',
  prismaClient: (ctx: Context) => ctx.prisma,
})

export const schema = makeSchema({
  types: [allTypes],
  plugins: [nexusPrisma],
  outputs: {
    typegen: join(process.cwd(), 'src/services/nexus/generated/index.d.ts'),
    schema: join(process.cwd(), 'src/services/nexus/generated/schema.graphql'),
  },
  contextType: {
    module: join(process.cwd(), 'src/services/nexus', 'context.ts'),
    export: 'Context',
    alias: 'ctx',
  },
  sourceTypes: {
    modules: [
      {
        module: require.resolve('@prisma/client'),
        alias: 'prisma',
      },
    ],
  },
  prettierConfig: join(process.cwd(), 'prettier.config.js'),
})
