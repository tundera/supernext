import { extendType, list, intArg } from 'nexus'

export const colorScheme = extendType({
  type: 'Query',
  definition(t) {
    t.crud.colorScheme()
    t.crud.colorSchemes({ filtering: true, ordering: true, pagination: true })

    t.field('allColorSchemes', {
      type: list('ColorScheme'),
      resolve(_parent, _args, ctx) {
        return ctx.prisma.colorScheme.findMany({})
      },
    })

    t.field('colorSchemeByTeam', {
      type: list('ColorScheme'),
      args: {
        id: intArg(),
      },
      resolve: (_parent, args, ctx) => {
        return ctx.prisma.colorScheme.findMany({
          where: {
            teamId: args.id,
          },
        })
      },
    })
  },
})
