#!/usr/bin/env ts-node-script

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const updateTeams = async () => {
  const teams = await prisma.team.findMany()

  const logTeamColors = (team) => {
    console.log(`ID: ${team.id}, COLORS: ${team.colorsPrimary} | ${team.colorsPrimary}`)
    return Promise.resolve()
  }

  return teams.map((team) => logTeamColors(team))
}

const main = async () => {
  try {
    await updateTeams()

    console.log('\nDone! 🥳')
    process.exit(0)
  } catch (err) {
    console.error(err)
  }
}

main()
