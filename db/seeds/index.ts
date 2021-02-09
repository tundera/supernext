import type { Coach, Player } from '@prisma/client'

import db from 'db'
import NBA from 'nba'
import nbaTeams from 'nba/data/teams.json'

// type NbaTeam = {
//   name: string
//   handle: string
//   city: string
//   abbreviation: string
//   conference: string
//   division: string
//   slug: string
//   wins: number
//   losses: number
//   winPercentage: number
//   established: string
// }

// type NbaTeamData = {
//   teamName: string
//   teamId: number
//   teamCity: string
//   teamAbbreviation: string
//   teamConference: string
//   teamDivision: string
//   teamSlug: string
//   w: number
//   l: number
//   pct: number
//   minYear: string
// }

// type NbaTeamCoachData = {
//   coachId: number
//   coachName: string
//   firstName: string
//   lastName: string
//   isAssistant: number
//   season: string
//   coachType: string
//   teamId: number
// }

// type NbaPlayer = {
//   name: string
//   handle: string
//   slug: string
//   position: string
//   teamId: string
//   number: string
//   height: string
//   weight: string
// }

// type NbaPlayerData = {
//   player: string
//   playerId: number
//   playerSlug: string
//   position: string
//   teamID: number
//   num: string
//   height: string
//   weight: string
// }

// const seed = async () => {
//   const seedTeamInfo: (teamId: number) => Promise<void> = async (teamId) => {
//     // Wait on common team info (teams)
//     const teamData = await NBA.stats.teamInfoCommon({ TeamID: teamId })
//     // Weird nesting here requires destructuring
//     const { teamInfoCommon } = teamData
//     // Data object in an enclosing array, need to use first entry
//     const teamInfo = teamInfoCommon[0]

//     console.log(`Transforming team data for team ${teamId}`)

//     // Transform team data
//     const transformTeam: (data: NbaTeamData) => NbaTeam = (data) => {
//       return {
//         name: data.teamName,
//         handle: `${data.teamId}`,
//         city: data.teamCity,
//         abbreviation: data.teamAbbreviation,
//         conference: data.teamConference,
//         division: data.teamDivision,
//         slug: data.teamSlug,
//         wins: data.w,
//         losses: data.l,
//         winPercentage: data.pct,
//         established: data.minYear,
//       }
//     }

//     const team = transformTeam(teamInfo)
//     console.log(`Done transformations on team data for team ${team.handle}.`)

//     // Wait on create team in the database
//     try {
//       await db.team.create({
//         data: {
//           name: team.name,
//           handle: team.handle,
//           updatedAt: new Date(),
//           city: team.city,
//           logo: team.logo,
//           abbreviation: team.abbreviation,
//           slug: team.slug,
//           wins: team.wins,
//           losses: team.losses,
//           winPercentage: team.winPercentage,
//           established: team.established,
//           conference: team.conference,
//           division: team.division,
//         },
//       })

//       console.log(`✔️ Seeded new team ${team.handle} to database`)
//     } catch (err) {
//       throw new Error(`❌ Unable to seed team ${team.handle} to database: ${err}`)
//     }
//   }

//   const seedPlayersAndCoaches: (teamId: number) => Promise<void> = async (teamId) => {
//     // Wait on team roster (players)
//     const data = await NBA.stats.commonTeamRoster({ TeamID: teamId })
//     // Weird nesting here requires destructuring
//     const { commonTeamRoster, coaches } = data

//     const teamRoster: NbaPlayerData[] = commonTeamRoster
//     const teamCoaches: NbaTeamCoachData[] = coaches

//     // Transform player data from team roster
//     const teamPlayers: NbaPlayer[] = teamRoster.map((p) => {
//       return {
//         name: p.player,
//         handle: p.playerId.toString(),
//         slug: p.playerSlug.toString(),
//         position: p.position,
//         teamId: p.teamID.toString(),
//         number: p.num,
//         height: p.height,
//         weight: p.weight,
//       }
//     })

//     try {
//       // Create a promise for a new player in the database for each player
//       const createPlayers: (players: NbaPlayer[]) => Promise<Player>[] = (players) =>
//         players.map((p) =>
//           db.player.create({
//             data: {
//               name: p.name,
//               handle: p.handle,
//               updatedAt: new Date(),
//               team: {
//                 connect: {
//                   handle: p.teamId,
//                 },
//               },
//               position: p.position,
//               slug: p.slug,
//               number: p.number,
//               height: p.height,
//               weight: p.weight,
//             },
//           }),
//         )

//       // Wait for all player promises to resolve
//       await Promise.all(createPlayers(teamPlayers))

//       console.log('✔️ Players promises resolved')
//     } catch (err) {
//       throw new Error(`❌ Unable to resolve players promises: ${err}`)
//     }

//     try {
//       // Create a promise for a new coach in the database for each coach
//       const createCoaches: (coaches: NbaTeamCoachData[]) => Promise<Coach>[] = (coaches) =>
//         coaches.map((c) =>
//           db.coach.create({
//             data: {
//               name: c.coachName,
//               handle: c.coachId.toString(),
//               updatedAt: new Date(),
//               team: {
//                 connect: {
//                   handle: c.teamId.toString(),
//                 },
//               },
//               type: c.coachType,
//               isAssistant: c.isAssistant.toString(),
//             },
//           }),
//         )

//       // Wait for all coaches promises to resolve
//       await Promise.all(createCoaches(teamCoaches))
//       console.log('✔️ Coaches promises resolved')
//     } catch (err) {
//       throw new Error(`❌ Unable to resolve coaches promises: ${err}`)
//     }
//   }

//   // const updatePlayersWithTeamIds: (teamId: number) => Promise<void> = async (teamId) => {
//   //   const team = await db.team.findOne({
//   //     where: {
//   //       handle: teamId.toString(),
//   //     },
//   //   })

//   //   try {
//   //     const players = await db.player.findMany({
//   //       where: {
//   //         team: {
//   //           handle: team?.handle,
//   //         },
//   //       },
//   //     })
//   //     console.info(`✔️ Updated players with team id`)

//   //     const updatePlayersPromises = players.map((player) =>
//   //       db.player.update({
//   //         where: {
//   //           id: player.id,
//   //         },
//   //         data: {
//   //           team: {
//   //             connect: {
//   //               id: team?.id,
//   //             },
//   //           },
//   //         },
//   //       })
//   //     )

//   //     await Promise.all(updatePlayersPromises)

//   //     console.info(`✅ Done connecting players to team by id for team ${team?.id} (${team?.name})`)
//   //   } catch (err) {
//   //     throw new Error(
//   //       `❌ Unable to connect players to team by id for team ${team?.id} (${team?.name}): ${err}`
//   //     )
//   //   }
//   // }

//   // Seed all teams serially in case team rosters out of sync (trades, injuries, etc)
//   try {
//     await nbaTeams.reduce(async (previousPromise, nbaTeam) => {
//       try {
//         // Wait on previous promise to resolve (last team)
//         await previousPromise
//         console.info('✔️ Done seeding previous team')

//         // Wait on the current team to finish seeding
//         await seedTeamInfo(nbaTeam.teamId)
//         console.info(`✔️ Done seeding team info for team ${nbaTeam.teamId} (${nbaTeam.teamName})`)

//         await seedPlayersAndCoaches(nbaTeam.teamId)
//         console.info(`✔️ Done seeding players and coaches for team ${nbaTeam.teamId} (${nbaTeam.teamName})`)

//         // await updatePlayersWithTeamIds(nbaTeam.teamId)
//         // console.info(
//         //   `✔️ Done updating players with db team id for team ${nbaTeam.teamId} (${nbaTeam.teamName})`
//         // )

//         console.info('✅ Done seeding all NBA teams')
//       } catch (err) {
//         throw new Error(`❌ Error seeding NBA team ${nbaTeam.teamId} (${nbaTeam.teamName})`)
//       }

//       // Display a message indicating all players on a team have finished seeding
//     }, undefined)
//   } catch (err) {
//     throw new Error(`❌ Error seeding NBA teams: ${err}`)
//   }
// }

const seed = async () => {
  console.log('Done!')
}

export default seed
