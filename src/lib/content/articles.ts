import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const cwd = process.cwd()

export async function getAllArticles() {
  const root = path.join(cwd, 'src/services/content/articles')
  const articles = fs.readdirSync(root).map((p) => {
    const content = fs.readFileSync(path.join(root, p), 'utf8')

    return {
      slug: p.replace(/\.mdx?/, ''),
      content,
      frontMatter: matter(content).data,
    }
  })

  return articles
}

export async function getArticle(slug: string) {
  const root = path.join(cwd, 'src/services/content/articles')
  const source = fs.readFileSync(path.join(root, `${slug}.mdx`), 'utf8')

  const { data: frontMatter, content } = matter(source)

  return {
    slug,
    content,
    frontMatter,
  }
}
