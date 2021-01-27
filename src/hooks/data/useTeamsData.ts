import { createDataHook } from 'next-data-hooks'

import { getAllTeams } from '@lib/nexus/teams'

export const useTeamsData = createDataHook('Teams', async ({ preview = false }) => {
  const teams = await getAllTeams()

  return {
    teams,
    preview,
  }
})
