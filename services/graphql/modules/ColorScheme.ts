import { objectType, extendType, list, intArg } from 'nexus'
// import { ColorScheme } from 'nexus-prisma'
/**
 * ColorScheme Object Type
 */
// export const ColorSchemeObject = objectType({
//   name: ColorScheme.$name,
//   description: ColorScheme.$description,
//   definition(t) {
//     t.field('id', ColorScheme.id)
//     t.field('createdAt', ColorScheme.createdAt)
//     t.field('updatedAt', ColorScheme.updatedAt)
//     t.field('primary', ColorScheme.primary)
//     t.field('secondary', ColorScheme.secondary)
//     t.field('teamId', ColorScheme.teamId)
//     t.field('team', ColorScheme.team)
//   },
// })

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
      resolve: (parent, _args, ctx) => {
        return ctx.db.colorScheme
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
        return ctx.db.colorScheme.findMany({})
      },
    })

    t.field('colorSchemeByTeam', {
      type: 'ColorScheme',
      args: {
        id: intArg(),
      },
      resolve: (_parent, args, ctx) => {
        return ctx.db.colorScheme.findUnique({
          where: { id: args.id ?? undefined },
        })
      },
    })
  },
})
