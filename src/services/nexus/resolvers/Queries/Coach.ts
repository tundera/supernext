import { extendType, list, intArg } from 'nexus'

export const coach = extendType({
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
