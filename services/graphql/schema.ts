import { makeSchema } from 'nexus'
import { join } from 'path'

import * as moduleTypes from './modules'
import * as scalarTypes from './scalars'
import * as inputTypes from './inputs'

import prettierConfig from '../../prettier.config'

const cwd = process.cwd()

export const schema = makeSchema({
  types: [moduleTypes, scalarTypes, inputTypes],
  plugins: [],
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
        module: join(cwd, 'db', 'index.ts'),
        alias: 'db',
      },
    ],
  },
  prettierConfig,
})
