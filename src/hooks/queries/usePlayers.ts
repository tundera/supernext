import type { NexusGenObjects } from '@lib/graphql/generated/nexus-typegen'

import { useQuery } from 'react-query'
import { request } from 'graphql-request'
import gql from 'graphql-tag'

type Player = NexusGenObjects['Player']

const endpoint = `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`

function usePlayers() {
  return useQuery<Player[], Error>('players', async () => {
    const { allPlayers: data } = await request(
      endpoint,
      gql`
        query {
          allPlayers {
            id
            name
            team {
              name
            }
            position
            number
            height
            weight
          }
        }
      `,
    )

    return data
  })
}

export default usePlayers
