import type { NexusGenObjects } from '@lib/graphql/generated/nexus-typegen'

import { useQuery } from 'react-query'
import { request } from 'graphql-request'
import gql from 'graphql-tag'

type Coach = NexusGenObjects['Coach']

const endpoint = `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`

function useCoaches() {
  return useQuery<Coach[], Error>('coaches', async () => {
    const { allCoaches: data } = await request(
      endpoint,
      gql`
        query {
          allCoaches {
            id
            name
            team {
              name
            }
          }
        }
      `,
    )

    return data
  })
}

export default useCoaches
