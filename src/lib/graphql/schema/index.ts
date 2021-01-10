import { makeSchema } from 'nexus'
import path from 'path'
import * as QueryTypes from './Query'

const schema = makeSchema({
  types: [QueryTypes],
  prettierConfig: path.join(process.cwd(), 'prettier.config.js'),
  outputs: {
    typegen: path.join(process.cwd(), 'types/generated/nexus-typegen.ts'),
    schema: path.join(process.cwd(), 'types/generated/schema.graphql'),
  },
})

export default schema
