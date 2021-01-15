import { useQuery, UseQueryOptions } from 'react-query'

import { getAllBlogPosts } from '@lib/datocms/blog'

export function useBlogPosts(options?: UseQueryOptions<any, Error>) {
  const queryOptions = { ...options }

  return useQuery<any, Error>('blog-posts', getAllBlogPosts, queryOptions)
}
