#!/usr/bin/env ts-node-script

import { PrismaClient, Team } from '@prisma/client'

const prisma = new PrismaClient()

const createTeamColorScheme = async (team: Team) =>
  prisma.colorScheme.create({
    data: {
      primary: team.primaryColor,
      secondary: team.secondaryColor,
      team: {
        connect: {
          id: team.id,
        },
      },
    },
  })

const updateTeamsWithColorScheme = async () => {
  const teams = await prisma.team.findMany({})

  return teams.map((team) => createTeamColorScheme(team))
}

const main = async () => {
  try {
    await updateTeamsWithColorScheme()
    console.log('Done! 🥳')

    process.exit(0)
  } catch (err) {
    throw new Error(err)
  }
}

main()
