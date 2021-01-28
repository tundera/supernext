import { createDataHook } from 'next-data-hooks'
import { format } from 'light-date'
import sanity from '@lib/sanity/client'

export const useBlogPostsData = createDataHook('BlogPosts', async ({ preview = false }) => {
  sanity.setPreviewMode(preview)

  const posts = await sanity.getAll('post')

  const expandPost = async (post) => {
    const { author, date, ...rest } = post
    const expandedAuthor = await sanity.expand(author)
    const dateString = format(new Date(date), '{MM}/{dd}/{yyyy}')

    return {
      ...rest,
      author: expandedAuthor,
      date: dateString,
    }
  }

  const getExpandedPosts = async () => {
    return Promise.all(posts.map((post) => expandPost(post)))
  }

  const data = await getExpandedPosts()

  return {
    posts: data,
    preview,
  }
})
