import { objectType, extendType, list, intArg } from 'nexus'

export const Player = objectType({
  name: 'Player',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.handle()
    t.model.name()
    t.model.slug()
    t.model.teamId()
    t.model.height()
    t.model.weight()
    t.model.number()
    t.model.position()
    t.model.team()
  },
})

export const PlayerQueries = extendType({
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
