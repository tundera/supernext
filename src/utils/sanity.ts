import type { SanityContentOptions } from 'types/sanity'

import { request } from 'graphql-request'

const endpoint = `${process.env.NEXT_PUBLIC_SANITY_GRAPHQL_ENDPOINT}`

export async function getSanityContent({ query, variables = {} }: SanityContentOptions) {
  const data = await request(endpoint, query, variables)

  return data
}
