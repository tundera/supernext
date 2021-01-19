import type { BlogPost } from 'types/sanity'
import { AllPostsDocument, PostBySlugDocument } from 'generated/sanity'

import { getSanityContent } from '@utils/sanity'

export async function getAllPosts() {
  const data = await getSanityContent({
    query: AllPostsDocument,
  })

  return data.allPost
}

export async function getPostBySlug(slug: string) {
  const data = await getSanityContent({ query: PostBySlugDocument, variables: { slug } })

  return data.allPost
}
