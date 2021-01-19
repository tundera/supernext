import { DocumentNode } from 'graphql'

export type SanityContentOptions = {
  query: string | DocumentNode
  variables?: any
}

export type SanityPage = {
  title: string
  slug: {
    current: string
  }
}
