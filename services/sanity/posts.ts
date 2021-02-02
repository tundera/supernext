import { groq } from 'next-sanity'

export const PostBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    content,
    date,
    coverImage,
    author->{
      _id,
      name,
      avatar
    },
    "slug": slug.current,
}
`

export const AllPostsQuery = groq`
  *[_type == "post"] | order(date desc) [0..($count - 1)] {
    _id,
    title,
    author->{
      _id,
      name,
      avatar
    },
    excerpt,
    date,
    coverImage,
    "slug": slug.current,
}
`
