import { PostsDocument, PostBySlugDocument, Post } from 'generated/sanity-graphql'
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
