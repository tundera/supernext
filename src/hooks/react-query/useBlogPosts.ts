import { useQuery, UseQueryOptions } from 'react-query'
import { request } from '@lib/cms/datocms'

import BlogPostsQuery from '@graphql/datocms/queries/BlogPosts'

export async function getBlogPosts(): Promise<any> {
  const options = { query: BlogPostsQuery, variables: { limit: 10 } }
  const { allBlogPosts: data } = await request({ ...options })

  return data
}

export function useBlogPosts(options?: UseQueryOptions<any, Error>) {
  const queryOptions = { ...options }

  return useQuery<any, Error>('blog-posts', getBlogPosts, queryOptions)
}
