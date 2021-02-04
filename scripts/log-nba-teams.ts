#!/usr/bin/env ts-node-script

import { PrismaClient, Team } from 'db'

const prisma = new PrismaClient()

const logTeam = async (team: Team) => {
  console.dir(team, { colors: true, depth: null })
}

const logTeams = async () => {
  const teams = await prisma.team.findMany({})

  return Promise.all(teams.map((team) => logTeam(team)))
}

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
  await prisma.$disconnect()
})
