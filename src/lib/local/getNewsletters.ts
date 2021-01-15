import type { Newsletter, FrontMatter } from 'types/content'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const root = process.cwd()

export async function getNewsletters(): Promise<Newsletter[]> {
  const newslettersRoot = path.join(root, 'content', 'newsletters')
  const newsletters = fs.readdirSync(newslettersRoot).map((p) => {
    const content = fs.readFileSync(path.join(newslettersRoot, p), 'utf8')

    return {
      slug: p.replace(/\.mdx?/, ''),
      content,
      frontMatter: matter(content).data as FrontMatter,
    }
  })

  return newsletters
}
