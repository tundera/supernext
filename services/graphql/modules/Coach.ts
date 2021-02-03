import { objectType, extendType, list, intArg } from 'nexus'

export const Coach = objectType({
  name: 'Coach',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.handle()
    t.model.name()
    t.model.teamId()
    t.model.type()
    t.model.isAssistant()
    t.model.team()
  },
})

export const CoachQueries = extendType({
  type: 'Query',
  definition(t) {
    t.crud.coach()
    t.crud.coaches({ filtering: true, ordering: true, pagination: true })

    t.field('allCoaches', {
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
      resolve: (_parent, args, ctx) => {
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
