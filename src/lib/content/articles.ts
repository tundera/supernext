import type { Article, FrontMatter } from 'src/services/content/types'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const root = process.cwd()

export async function getAllArticles(): Promise<Article[]> {
  const articlesRoot = path.join(root, 'src/services/content/articles')
  const articles = fs.readdirSync(articlesRoot).map((p) => {
    const content = fs.readFileSync(path.join(articlesRoot, p), 'utf8')

    return {
      slug: p.replace(/\.mdx?/, ''),
      content,
      frontMatter: matter(content).data as FrontMatter,
    }
  })

  return articles
}
