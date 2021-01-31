import { extendType, list, intArg } from 'nexus'

export const player = extendType({
  type: 'Query',
  definition(t) {
    t.crud.player()
    t.crud.players({ filtering: true, ordering: true, pagination: true })

    t.field('allPlayers', {
      type: list('Player'),
      resolve(_parent, _args, ctx) {
        return ctx.prisma.player.findMany({})
      },
    })

    t.field('playersByTeam', {
      type: list('Player'),
      args: {
        id: intArg(),
      },
      resolve: (_parent, args, ctx) => {
        return ctx.prisma.player.findMany({
          where: { teamId: args.id },
          orderBy: {
            name: 'desc',
          },
        })
      },
    })
  },
})
