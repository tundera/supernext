import { ApolloServer } from 'apollo-server-micro'

import { schema } from 'services/nexus/schema'
import { createContext } from 'services/nexus/context'

const server = new ApolloServer({
  context: createContext,
  schema,
  tracing: process.env.NODE_ENV === 'development',
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default server.createHandler({
  path: '/api/graphql',
})
