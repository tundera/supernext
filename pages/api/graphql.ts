import type { Context } from 'src/services/nexus/types'

import { ApolloServer, AuthenticationError, UserInputError } from 'apollo-server-micro'
import { applyMiddleware } from 'graphql-middleware'
import { schema } from 'src/services/nexus/schema'
import { createContext, isDev, handleError } from 'src/services/nexus/helpers'

import { shield, rule } from 'graphql-shield'

export const errors = {
  notAuthenticated: new AuthenticationError('Unauthenticated user!'),
  userAlreadyExists: new UserInputError('User already exists!'),
  invalidUser: new UserInputError('Invalid username or password'),
}

export const rules = {
  isAuthenticatedUser: rule({ cache: 'contextual' })((_parent, _args, ctx: Context) => {
    try {
      if (ctx.userId === -1) {
        return handleError(errors.notAuthenticated)
      }
      return true
    } catch (err) {
      return err
    }
  }),
  isPostOwner: rule({ cache: 'contextual' })(async (_parent, args, ctx: Context) => {
    const id = args.where ? args.where.id : args.id
    try {
      const author = await ctx.prisma.post
        .findUnique({
          where: {
            id,
          },
        })
        .author()
      return ctx?.userId === author?.id
    } catch (err) {
      return err
    }
  }),
}

export const permissions = shield({
  Query: {
    me: rules.isAuthenticatedUser,
    posts: rules.isAuthenticatedUser,
    post: rules.isAuthenticatedUser,
  },
  Mutation: {
    createDraft: rules.isAuthenticatedUser,
    deletePost: rules.isPostOwner,
    publish: rules.isPostOwner,
  },
})

const server = new ApolloServer({
  schema: applyMiddleware(schema, permissions),
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
