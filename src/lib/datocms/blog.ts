import { request } from '@lib/datocms'

import BlogPostsQuery from '@lib/datocms/queries/BlogPosts'
import BlogPostBySlugQuery from '@lib/datocms/queries/BlogPostBySlug'

export async function getBlogPosts(preview = false) {
  const options = { query: BlogPostsQuery, variables: { limit: 10 }, preview }
  const { allBlogPosts: data } = await request({ ...options })

  return data
}

export async function getBlogPostBySlug(slug: string, preview?: boolean) {
  const options = { query: BlogPostBySlugQuery, variables: { slug }, preview }
  const { blogPost: data } = await request({ ...options })

  return data
}
