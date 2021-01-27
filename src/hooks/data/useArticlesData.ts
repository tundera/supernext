import { createDataHook } from 'next-data-hooks'

import { getAllArticles } from '@lib/content/articles'

export const useArticlesData = createDataHook('Articles', async ({ preview = false }) => {
  const articles = await getAllArticles()

  return {
    articles,
    preview,
  }
})
