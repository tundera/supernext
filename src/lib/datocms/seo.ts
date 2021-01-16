import { request } from '@lib/datocms'

import PageSeoQuery from '@graphql/datocms/queries/PageSeo'
import BlogPostSeoQuery from '@graphql/datocms/queries/BlogPostSeo'

export function getPageSeo(title: string): Promise<any> {
  const options = { query: PageSeoQuery, variables: { title } }

  return request({ ...options })
}

export function getBlogPostSeo(slug: string): Promise<any> {
  const options = { query: BlogPostSeoQuery, variables: { slug } }

  return request({ ...options })
}
