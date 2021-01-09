import type { BlogPost, FrontMatter } from 'src/types/blog'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const root = process.cwd()

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const postsRoot = path.join(root, 'content', 'posts')
  const posts = fs.readdirSync(postsRoot).map((p) => {
    const content = fs.readFileSync(path.join(postsRoot, p), 'utf8')

    return {
      slug: p.replace(/\.mdx?/, ''),
      content,
      frontMatter: matter(content).data as FrontMatter,
    }
  })

  return posts
}
