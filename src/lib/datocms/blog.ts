import type { BlogPost } from 'types/datocms'

import { request } from '@lib/datocms'

import BlogPostBySlugQuery from '@graphql/datocms/queries/BlogPostBySlug'
import BlogPostsQuery from '@graphql/datocms/queries/BlogPosts'

export async function getSingleBlogPost(slug: string): Promise<BlogPost> {
  const options = { query: BlogPostBySlugQuery, variables: { slug } }
  const { blogPost: data } = await request({ ...options })

  return data
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const options = { query: BlogPostsQuery, variables: { limit: 10 } }
  const { allBlogPosts: data } = await request({ ...options })

  return data
}
