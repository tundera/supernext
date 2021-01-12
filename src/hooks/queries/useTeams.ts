import type { NexusGenObjects } from '@lib/graphql/generated/nexus-typegen'

import { useQuery } from 'react-query'
import { request } from 'graphql-request'
import gql from 'graphql-tag'

type Team = NexusGenObjects['Team']

const endpoint = `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`

function useTeams() {
  return useQuery<Team[], Error>('teams', async () => {
    const { allTeams: data } = await request(
      endpoint,
      gql`
        query {
          allTeams {
            id
            name
            city
          }
        }
      `,
    )

    return data
  })
}

export default useTeams
