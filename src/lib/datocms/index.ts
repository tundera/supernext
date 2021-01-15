import { DocumentNode } from 'graphql'
import { GraphQLClient } from 'graphql-request'

type RequestOptions = {
  query: string | DocumentNode
  variables?: { [key: string]: any }
  preview?: boolean
}

export function request({ query, variables, preview }: RequestOptions) {
  const endpoint = preview ? 'https://graphql.datocms.com/preview' : 'https://graphql.datocms.com/'
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
    },
  })
  return client.request(query, variables)
}
