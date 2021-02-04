import { objectType, inputObjectType, extendType, list, intArg } from 'nexus'

/**
 * Coach Object Type
 */
export const Coach = objectType({
  name: 'Coach',
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
    t.int('teamId')
    t.string('type')
    t.string('isAssistant')
    t.field('team', {
      type: 'Team',
      resolve: (parent, _args, context) => {
        return context.prisma.coach
          .findUnique({
            where: { id: parent.id },
          })
          .team()
      },
    })
  },
})

/**
 * Coach Query Types
 */
export const CoachQueries = extendType({
  type: 'Query',
  definition(t) {
    t.field('coaches', {
      type: list('Coach'),
      resolve(_parent, _args, ctx) {
        return ctx.prisma.coach.findMany({})
      },
    })

    t.field('coachesByTeam', {
      type: list('Coach'),
      args: {
        id: intArg(),
      },
      resolve(_parent, args, ctx) {
        return ctx.prisma.coach.findMany({
          where: { teamId: args.id },
          orderBy: {
            name: 'desc',
          },
        })
      },
    })
  },
})

/**
 * Coach Input Types
 */
export const CoachOrderByInput = inputObjectType({
  name: 'CoachOrderByInput',
  definition(t) {
    t.nonNull.field('name', {
      type: 'SortOrder',
    })
  },
})

export const CoachWhereUniqueInput = inputObjectType({
  name: 'CoachWhereUniqueInput',
  definition(t) {
    t.nonNull.int('id')
  },
})

export const CoachWhereInput = inputObjectType({
  name: 'CoachWhereInput',
  definition(t) {
    t.nonNull.int('id')
    t.nonNull.field('name', { type: 'StringFilter' })
  },
})
