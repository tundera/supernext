#!/usr/bin/env ts-node-script

import { paramCase } from 'change-case'
import db, { Team } from '../db'

const logTeam = async (team: Team) => {
  console.dir(team, { colors: true, depth: null })
}

const logTeams = async () => {
  const teams = await db.team.findMany({})

  return Promise.all(teams.map((team) => logTeam(team)))
}

// const addLogoSlug = async (team: Team) => {
//   const logoSlug = `${paramCase(team.city)}-${paramCase(team.slug)}-logo`

//   return db.team.update({
//     where: { id: team.id },
//     data: {
//       logoSlug,
//     },
//   })
// }

// const updateTeams = async () => {
//   const teams = await db.team.findMany({})

//   return Promise.all(teams.map((team) => addLogoSlug(team)))
// }

const main = async () => {
  try {
    await logTeams()
    console.log('Done! 🥳')

    process.exit(0)
  } catch (err) {
    throw new Error(err)
  }
}

main().finally(async () => {
  await db.$disconnect()
})
