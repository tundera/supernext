import { objectType, inputObjectType, list, intArg, extendType } from 'nexus'

/**
 * Player Object Type
 */
export const Player = objectType({
  name: 'Player',
  definition(t) {
    t.nonNull.int('id')
    t.nonNull.field('createdAt', {
      type: 'DateTime',
    })
    t.nonNull.field('updatedAt', {
      type: 'DateTime',
    })
    t.nonNull.string('handle')
    t.nonNull.string('name')
    t.nonNull.string('slug')
    t.int('teamId')
    t.nonNull.string('height')
    t.nonNull.string('weight')
    t.string('number')
    t.string('position')
    t.field('team', {
      type: 'Team',
      resolve: (parent, _args, ctx) => {
        return ctx.prisma.player
          .findUnique({
            where: { id: parent.id },
          })
          .team()
      },
    })
  },
})

/**
 * Player Query Types
 */
export const PlayerQueries = extendType({
  type: 'Query',
  definition(t) {
    t.field('players', {
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
            name: 'asc',
          },
        })
      },
    })
  },
})

/**
 * Player Input Types
 */
export const PlayerOrderByInput = inputObjectType({
  name: 'PlayerOrderByInput',
  definition(t) {
    t.nonNull.field('name', {
      type: 'SortOrder',
    })
  },
})

export const PlayerWhereUniqueInput = inputObjectType({
  name: 'PlayerWhereUniqueInput',
  definition(t) {
    t.nonNull.int('id')
  },
})

export const PlayerWhereInput = inputObjectType({
  name: 'PlayerWhereInput',
  definition(t) {
    t.nonNull.int('id')
    t.nonNull.field('name', { type: 'StringFilter' })
  },
})
