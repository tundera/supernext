import { makeSchema } from 'nexus'
import { nexusPrisma } from 'nexus-plugin-prisma'

import path from 'path'
import * as QueryTypes from './Query'

export const schema = makeSchema({
  types: [QueryTypes],
  plugins: [nexusPrisma({ experimentalCRUD: true })],
  outputs: {
    typegen: path.join(process.cwd(), 'generated/nexus.ts'),
    schema: path.join(process.cwd(), 'generated/schema.graphql'),
  },
  prettierConfig: path.join(process.cwd(), 'prettier.config.js'),
  contextType: { module: path.join(process.cwd(), 'services/nexus', 'context.ts'), export: 'Context' },
  sourceTypes: {
    modules: [
      { module: '@prisma/client', alias: 'prisma' },
      { module: path.join(process.cwd(), 'services/nexus', 'context.ts'), alias: 'Context' },
    ],
  },
})
