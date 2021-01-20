import { groq } from 'next-sanity'

import { PostsDocument, PostBySlugDocument, Post } from 'generated/sanity'
import request from '@utils/sanity/request'

export async function getPosts(limit?: number) {
  const data = await request({
    query: PostsDocument,
    variables: { limit: limit ?? null },
  })

  return data.allPost as Post[]
}

export async function getPostBySlug(slug: string) {
  const data = await request({ query: PostBySlugDocument, variables: { slug } })

  return data.allPost as Post[]
}

const postGroqQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    content,
    date
    coverImage,
    author->{
      _id,
      name
      avatar
    },
    "slug": slug.current
  }
`
