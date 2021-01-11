import { objectType, queryType } from 'nexus'

export const Framework = objectType({
  name: 'Framework',
  definition(t) {
    t.id('id')
    t.string('name')
  },
})

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
    t.model.abbreviation()
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

export const Query = queryType({
  definition(t) {
    t.list.field('frameworks', {
      type: 'Framework',
      resolve: () => {
        return [
          {
            id: '1',
            name: 'React',
          },
          {
            id: '2',
            name: 'Vue',
          },
          {
            id: '3',
            name: 'Angular',
          },
          {
            id: '4',
            name: 'Svelte',
          },
        ]
      },
    })
    t.list.field('allCoaches', {
      type: 'Coach',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.coach.findMany({})
      },
    })
    t.list.field('allPlayers', {
      type: 'Player',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.player.findMany({})
      },
    })
    t.list.field('allTeams', {
      type: 'Team',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.team.findMany({})
      },
    })
  },
})
