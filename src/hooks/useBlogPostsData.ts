import { createDataHook } from 'next-data-hooks'
// import { parse } from 'date-fns'

import sanity from '@lib/sanity/client'

export const useBlogPostsData = createDataHook('BlogPosts', async ({ preview = false }) => {
  sanity.setPreviewMode(preview)

  const posts = await sanity.getAll('post')
  console.dir(posts, { colors: true, depth: null })

  const expandPost = async (post) => {
    const { author, date, ...rest } = post
    const expandedAuthor = await sanity.expand(author)
    // const formattedDate = parse(date, 'MM-dd-yyyy', new Date())

    return {
      ...rest,
      author: expandedAuthor,
      date,
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
