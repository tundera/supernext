import { DocumentNode } from 'graphql'

export type SanityContentOptions = {
  query: string | DocumentNode
  variables?: any
}
