import type { PageSeoType, BlogPostSeoType } from 'types/datocms'

import { request } from '@lib/datocms'

import PageSeoQuery from '@graphql/datocms/queries/PageSeo'
import BlogPostSeoQuery from '@graphql/datocms/queries/BlogPostSeo'

export function getPageSeo(title: string): Promise<PageSeoType> {
  const options = { query: PageSeoQuery, variables: { title } }

  return request({ ...options })
}

export function getBlogPostSeo(slug: string): Promise<BlogPostSeoType> {
  const options = { query: BlogPostSeoQuery, variables: { slug } }

  return request({ ...options })
}
