import renderToString from 'next-mdx-remote/render-to-string'
import { createDataHook } from 'next-data-hooks'
import { parse } from 'date-fns'

import sanity from '@lib/sanity/client'
import Callout from '@components/Callout'

const useBlogPost = createDataHook('BlogPost', async ({ params, preview = false }) => {
  const pageSlug = params?.slug as string

  // Prefer drafts in preview mode
  sanity.setPreviewMode(preview)

  // Get blog post data
  const [post] = await sanity.getAll('post', `_type == "post" && slug.current == "${pageSlug}"`)
  const { author, date, content, ...rest } = post

  // Get additional data for author, date, and images
  const expandedAuthor = await sanity.expand(author)
  // const formattedDate = parse(date, 'MM-dd-yyyy', new Date())

  // Render MDX content to markup
  const markup = await renderToString(content ?? '', {
    components: { Callout },
  })

  const data = {
    ...rest,
    author: expandedAuthor,
    date,
    content: markup,
  }

  return {
    post: data,
    preview,
  }
})

export default useBlogPost
