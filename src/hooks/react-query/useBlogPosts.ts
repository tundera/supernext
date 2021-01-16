import type { BlogPost } from 'types/datocms'

import { useQuery, UseQueryOptions } from 'react-query'

import { getAllBlogPosts } from '@lib/datocms/blog'

export function useBlogPosts(options?: UseQueryOptions<BlogPost[], Error>) {
  const queryOptions = { ...options }

  return useQuery<BlogPost[], Error>('blog-posts', getAllBlogPosts, queryOptions)
}
