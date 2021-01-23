import { PostsDocument, PostBySlugDocument, Post } from 'src/services/sanity/generated/graphql'
import { getSanityContent } from '@lib/sanity'

export async function getPosts(limit?: number) {
  const data = await getSanityContent({
    query: PostsDocument,
    variables: { limit: limit ?? null },
  })

  return data.allPost as Post[]
}

export async function getPostBySlug(slug: string) {
  const data = await getSanityContent({ query: PostBySlugDocument, variables: { slug } })

  return data.allPost as Post[]
}
