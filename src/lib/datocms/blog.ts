import type { BlogPost } from 'types/datocms'

import { request } from '@lib/datocms'

import BlogPostBySlugQuery from '@graphql/datocms/queries/BlogPostBySlug'
import BlogPostsQuery from '@graphql/datocms/queries/BlogPosts'

export async function getBlogPostBySlug(slug: string, preview?: boolean): Promise<BlogPost> {
  const options = { query: BlogPostBySlugQuery, variables: { slug }, preview }
  const { blogPost: data } = await request({ ...options })

  return data
}

export async function getAllBlogPosts(preview: boolean = false): Promise<BlogPost[]> {
  const options = { query: BlogPostsQuery, variables: { limit: 10 }, preview }
  const { allBlogPosts: data } = await request({ ...options })

  return data
}
