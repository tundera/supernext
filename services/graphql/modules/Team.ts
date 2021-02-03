import { objectType, extendType, list, intArg } from 'nexus'

export const Team = objectType({
  name: 'Team',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.handle()
    t.model.name()
    t.model.slug()
    t.model.city()
    t.model.colorScheme()
    t.model.abbreviation()
    t.model.logo()
    t.model.wins()
    t.model.losses()
    t.model.winPercentage()
    t.model.conference()
    t.model.division()
    t.model.established()
    t.model.coaches()
    t.model.players()
  },
})

export const ColorScheme = objectType({
  name: 'ColorScheme',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.primary()
    t.model.secondary()
    t.model.teamId()
    t.model.team()
  },
})

export const TeamQueries = extendType({
  type: 'Query',
  definition(t) {
    // General team queries
    t.crud.team()
    t.crud.teams({ filtering: true, ordering: true, pagination: true })

    t.field('allTeams', {
      type: list('Team'),
      resolve(_parent, _args, ctx) {
        return ctx.prisma.team.findMany({})
      },
    })

    // Team color scheme queries
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
