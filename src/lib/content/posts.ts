import type { Post } from 'services/sanity/generated/types'

import { format } from 'light-date'

import sanity from '@lib/sanity/client'

const expandPost = async (post: Post) => {
  const { author, date, ...rest } = post
  const expandedAuthor = await sanity.expand(author)
  const dateString = format(new Date(date), '{MM}/{dd}/{yyyy}')

  return {
    ...rest,
    author: expandedAuthor,
    date: dateString,
  }
}

const getExpandedPosts = async (posts: Post[]) => {
  return Promise.all(posts.map((post) => expandPost(post)))
}

export async function getPosts() {
  const data = await sanity.getAll('post')
  const posts = await getExpandedPosts(data)

  return posts
}

export async function getPostBySlug(slug: string) {
  const [post] = await sanity.getAll('post', `_type == "post" && slug.current == "${slug}"`)
  const { author, date, ...rest } = post

  const expandedAuthor = await sanity.expand(author)
  const dateString = format(new Date(date), '{MM}/{dd}/{yyyy}')

  return {
    author: expandedAuthor,
    date: dateString,
    ...rest,
  }
}
