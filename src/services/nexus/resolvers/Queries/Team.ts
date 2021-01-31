import { extendType, list } from 'nexus'

export const team = extendType({
  type: 'Query',
  definition(t) {
    t.crud.team()
    t.crud.teams({ filtering: true, ordering: true, pagination: true })

    t.field('allTeams', {
      type: list('Team'),
      resolve(_parent, _args, ctx) {
        return ctx.prisma.team.findMany({})
      },
    })
  },
})
