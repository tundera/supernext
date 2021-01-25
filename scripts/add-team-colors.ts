#!/usr/bin/env ts-node-script

import { PrismaClient } from '@prisma/client'
import { Team } from 'src/services/nexus/types'

const prisma = new PrismaClient()

const updateTeams = async () => {
  const teams = await prisma.team.findMany()

  const logTeamColors = (team) => {
    console.log(`ID: ${team.id}, COLORS: ${team.primaryColor} | ${team.secondaryColor}`)
    return Promise.resolve()
  }

  return teams.map((team) => logTeamColors(team))

  // eslint-disable-next-line no-restricted-syntax
  //   return teams.map((team) => createTeamColors(team))
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
