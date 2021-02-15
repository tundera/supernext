import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const cwd = process.cwd()

type ContentType = 'articles' | 'posts'

export async function getContentItems(type: ContentType) {
  const root = path.join(cwd, 'content', type)
  const files = fs.readdirSync(root).map((file) => {
    const content = fs.readFileSync(path.join(root, file), 'utf8')

    return {
      slug: file.replace(/\.mdx?/, ''),
      content,
      frontMatter: matter(content).data,
    }
  })

  return files
}

export async function getContentItem(type: ContentType, slug: string) {
  const root = path.join(cwd, 'content', type)
  const source = fs.readFileSync(path.join(root, `${slug}.mdx`), 'utf8')

  const { data: frontMatter, content } = matter(source)

  return {
    slug,
    content,
    frontMatter,
  }
}
