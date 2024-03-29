import { ApolloServer } from 'apollo-server-micro'
import { schema } from 'services/graphql/schema'
import { createContext, isDev } from 'services/graphql/helpers'

const server = new ApolloServer({
  schema,
  context: createContext,
  playground: true,
  tracing: isDev(),
  introspection: true,
  debug: isDev(),
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default server.createHandler({
  path: '/api/graphql',
})
