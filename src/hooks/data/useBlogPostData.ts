import renderToString from 'next-mdx-remote/render-to-string'
import { createDataHook } from 'next-data-hooks'
// import { parse } from 'date-fns'

import sanity from '@lib/sanity/client'
import CodeBlock from '@components/ui/CodeBlock'

export const useBlogPostData = createDataHook('BlogPost', async ({ params, preview = false }) => {
  const pageSlug = params?.slug as string

  sanity.setPreviewMode(preview)

  const [post] = await sanity.getAll('post', `_type == "post" && slug.current == "${pageSlug}"`)
  const { author, date, content, ...rest } = post

  const expandedAuthor = await sanity.expand(author)
  // const formattedDate = parse(date, 'MM-dd-yyyy', new Date())

  const markup = await renderToString(content ?? '', {
    components: { CodeBlock },
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
