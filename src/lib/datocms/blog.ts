import { request } from '@lib/datocms'

import BlogPostsQuery from '@lib/datocms/queries/BlogPosts'
import BlogPostBySlugQuery from '@lib/datocms/queries/BlogPostBySlug'

export function getBlogPosts(preview = false) {
  const options = { query: BlogPostsQuery, variables: { limit: 10 }, preview }
  return request({ ...options })
}

export function getBlogPostBySlug(slug: string, preview?: boolean) {
  const options = { query: BlogPostBySlugQuery, variables: { slug }, preview }
  return request({ ...options })
}
