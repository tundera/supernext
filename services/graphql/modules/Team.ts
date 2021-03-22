import { objectType, inputObjectType, arg, extendType, list, intArg, stringArg } from 'nexus'
import { Team } from 'nexus-prisma'
/**
 * Team Object Type
 */
export const TeamObject = objectType({
  name: Team.$name,
  description: Team.$description,
  definition(t) {
    t.field('id', Team.id)
    t.field('createdAt', Team.createdAt)
    t.field('updatedAt', Team.updatedAt)
    t.field('handle', Team.handle)
    t.field('name', Team.name)
    t.field('slug', Team.slug)
    t.field('logoSlug', Team.logoSlug)
    t.field('city', Team.city)
    t.field('abbreviation', Team.abbreviation)
    t.field('logo', Team.logo)
    t.field('wins', Team.wins)
    t.field('losses', Team.losses)
    t.field('winPercentage', Team.winPercentage)
    t.field('conference', Team.conference)
    t.field('division', Team.division)
    t.field('established', Team.established)
    // t.field('coaches', Team.coaches)
    // t.field('players', Team.players)
    // t.field('colorScheme', Team.colorScheme)
    t.nonNull.list.nonNull.field('coaches', {
      type: 'Coach',
      args: {
        cursor: arg({ type: 'CoachWhereUniqueInput' }),
        take: intArg(),
        skip: intArg(),
        orderBy: arg({ type: 'CoachOrderByInput' }),
        where: arg({ type: 'CoachWhereInput' }),
      },
      resolve: (parent, args, ctx) => {
        return ctx.db.team
          .findUnique({
            where: { id: parent.id },
          })
          .coaches({
            cursor: args.cursor || undefined,
            take: args.take || undefined,
            skip: args.skip || undefined,
            orderBy: args.orderBy || undefined,
            where: {
              id: args.where?.id || undefined,
              name: args.where?.name || undefined,
            },
          })
      },
    })
    t.nonNull.list.nonNull.field('players', {
      type: 'Player',
      args: {
        cursor: arg({ type: 'PlayerWhereUniqueInput' }),
        take: intArg(),
        skip: intArg(),
        orderBy: arg({ type: 'PlayerOrderByInput' }),
        where: arg({ type: 'PlayerWhereInput' }),
      },
      resolve: (parent, args, ctx) => {
        return ctx.db.team
          .findUnique({
            where: { id: parent.id },
          })
          .players({
            cursor: args.cursor || undefined,
            take: args.take || undefined,
            skip: args.skip || undefined,
            orderBy: args.orderBy || undefined,
            where: {
              id: args.where?.id || undefined,
              name: args.where?.name || undefined,
            },
          })
      },
    })
    t.field('colorScheme', {
      type: 'ColorScheme',
      resolve: (parent, _args, ctx) => {
        return ctx.db.team
          .findUnique({
            where: { id: parent.id },
          })
          .colorScheme()
      },
    })
  },
})

// export const TeamObject = objectType({
//   name: 'Team',
//   definition(t) {
//     t.nonNull.int('id')
//     t.nonNull.field('createdAt', {
//       type: 'DateTime',
//     })
//     t.nonNull.field('updatedAt', {
//       type: 'DateTime',
//     })
//     t.nonNull.string('handle')
//     t.nonNull.string('name')
//     t.nonNull.string('slug')
//     t.nonNull.string('logoSlug')
//     t.nonNull.string('city')
//     t.nonNull.string('abbreviation')
//     t.nonNull.string('logo')
//     t.int('wins')
//     t.int('losses')
//     t.float('winPercentage')
//     t.nonNull.string('conference')
//     t.nonNull.string('division')
//     t.nonNull.string('established')
//     t.nonNull.string('primaryColor')
//     t.nonNull.string('secondaryColor')
//     t.nonNull.list.nonNull.field('coaches', {
//       type: 'Coach',
//       args: {
//         cursor: arg({ type: 'CoachWhereUniqueInput' }),
//         take: intArg(),
//         skip: intArg(),
//         orderBy: arg({ type: 'CoachOrderByInput' }),
//         where: arg({ type: 'CoachWhereInput' }),
//       },
//       resolve: (parent, args, ctx) => {
//         return ctx.db.team
//           .findUnique({
//             where: { id: parent.id },
//           })
//           .coaches({
//             cursor: args.cursor || undefined,
//             take: args.take || undefined,
//             skip: args.skip || undefined,
//             orderBy: args.orderBy || undefined,
//             where: {
//               id: args.where?.id || undefined,
//               name: args.where?.name || undefined,
//             },
//           })
//       },
//     })
//     t.nonNull.list.nonNull.field('players', {
//       type: 'Player',
//       args: {
//         cursor: arg({ type: 'PlayerWhereUniqueInput' }),
//         take: intArg(),
//         skip: intArg(),
//         orderBy: arg({ type: 'PlayerOrderByInput' }),
//         where: arg({ type: 'PlayerWhereInput' }),
//       },
//       resolve: (parent, args, ctx) => {
//         return ctx.db.team
//           .findUnique({
//             where: { id: parent.id },
//           })
//           .players({
//             cursor: args.cursor || undefined,
//             take: args.take || undefined,
//             skip: args.skip || undefined,
//             orderBy: args.orderBy || undefined,
//             where: {
//               id: args.where?.id || undefined,
//               name: args.where?.name || undefined,
//             },
//           })
//       },
//     })
//     t.nonNull.list.nonNull.field('colorScheme', {
//       type: 'ColorScheme',
//       resolve: (parent, _args, ctx) => {
//         return ctx.db.team
//           .findUnique({
//             where: { id: parent.id },
//           })
//           .colorScheme()
//       },
//     })
//   },
// })

/**
 * Team Query Types
 */
export const TeamQueries = extendType({
  type: 'Query',
  definition(t) {
    t.field('team', {
      type: 'Team',
      args: {
        slug: stringArg(),
      },
      resolve(_parent, args, ctx) {
        return ctx.db.team.findUnique({ where: { slug: args?.slug ?? undefined } })
      },
    })

    t.field('teams', {
      type: list('Team'),
      resolve(_parent, _args, ctx) {
        return ctx.db.team.findMany({})
      },
    })
  },
})

/**
 * Team Input Types
 */
export const TeamOrderByInput = inputObjectType({
  name: 'TeamOrderByInput',
  definition(t) {
    t.nonNull.field('slug', {
      type: 'SortOrder',
    })
  },
})

export const TeamWhereUniqueInput = inputObjectType({
  name: 'TeamWhereUniqueInput',
  definition(t) {
    t.nonNull.int('id')
  },
})

export const TeamWhereInput = inputObjectType({
  name: 'TeamWhereInput',
  definition(t) {
    t.nonNull.int('id')
    t.nonNull.field('slug', { type: 'StringFilter' })
  },
})
