import { objectType } from 'nexus'

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
