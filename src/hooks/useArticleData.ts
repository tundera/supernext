import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import renderToString from 'next-mdx-remote/render-to-string'

import { createDataHook } from 'next-data-hooks'

import mdxComponents from '@components/markdown/article'

const root = process.cwd()

export const useArticleData = createDataHook('Article', async ({ params, preview = false }) => {
  const source = fs.readFileSync(path.join(root, 'src/services/content/articles', `${params?.slug}.mdx`), 'utf8')
  const { data: frontMatter, content } = matter(source)

  const markup = await renderToString(content, {
    components: mdxComponents,
    mdxOptions: {
      remarkPlugins: [
        require('remark-slug'),
        require('remark-code-titles'),
        require('remark-toc'),
        require('remark-external-links'),
      ],
      rehypePlugins: [require('rehype-autolink-headings'), require('mdx-prism')],
      compilers: [],
    },
    scope: {},
  })

  return {
    article: markup,
    frontMatter,
    preview,
  }
})
