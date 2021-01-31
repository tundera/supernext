import { shield, rule } from 'graphql-shield'
import { errors } from 'src/utils/constants'
import type { Context } from './types'
import { handleError } from './helpers'

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
