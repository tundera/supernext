import type { PageSeoVariables, BlogPostSeoVariables, BlogPostsVariables, BlogPostBySlugVariables } from 'types/datocms'

import { DocumentNode } from 'graphql'
import { GraphQLClient } from 'graphql-request'

type RequestOptions = {
  query: string | DocumentNode
  variables?: BlogPostsVariables | BlogPostBySlugVariables | PageSeoVariables | BlogPostSeoVariables
  preview?: boolean
}

export function request({ query, variables, preview }: RequestOptions) {
  const endpoint = preview ? 'https://graphql.datocms.com/preview' : 'https://graphql.datocms.com/'
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
  })
  return client.request(query, variables)
}
