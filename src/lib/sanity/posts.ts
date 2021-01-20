import { PostsDocument, PostBySlugDocument, Post } from 'generated/sanity'
import request from '@utils/sanity/request'
// import { sanityClient, previewClient } from '@lib/sanity/index'

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

// export async function getPreviewPostBySlug(slug: string) {
//   const data = await getClient(true).fetch(
//     `*[_type == "post" && slug.current == $slug] | order(dpublishedAtate desc){
//       ${postFields}
//       body
//     }`,
//     { slug },
//   )
//   return data[0]
// }
