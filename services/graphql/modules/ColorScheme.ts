import { objectType, extendType, list, intArg } from 'nexus'

/**
 * ColorScheme Object Type
 */
export const ColorScheme = objectType({
  name: 'ColorScheme',
  definition(t) {
    t.nonNull.int('id')
    t.nonNull.field('createdAt', {
      type: 'DateTime',
    })
    t.nonNull.field('updatedAt', {
      type: 'DateTime',
    })
    t.nonNull.string('primary')
    t.nonNull.string('secondary')
    t.int('teamId')
    t.field('team', {
      type: 'Team',
      resolve: (parent, _, context) => {
        return context.prisma.colorScheme
          .findUnique({
            where: { id: parent.id },
          })
          .team()
      },
    })
  },
})

/**
 * ColorScheme Query Types
 */
export const ColorSchemeQueries = extendType({
  type: 'Query',
  definition(t) {
    t.field('colorSchemes', {
      type: list('ColorScheme'),
      resolve(_parent, _args, ctx) {
        return ctx.prisma.colorScheme.findMany({})
      },
    })

    t.field('colorSchemeByTeam', {
      type: 'ColorScheme',
      args: {
        id: intArg(),
      },
      resolve: (_parent, args, ctx) => {
        return ctx.prisma.colorScheme.findUnique({
          where: { id: args.id ?? undefined },
        })
      },
    })
  },
})
