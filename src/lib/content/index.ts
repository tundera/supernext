import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const cwd = process.cwd()

type ContentType = 'articles' | 'posts'

export async function getContentFiles(type: ContentType) {
  const root = path.join(cwd, 'content', type)
  const files = fs.readdirSync(root).map((file) => {
    const content = fs.readFileSync(path.join(root, file), 'utf8')
    const { data } = matter(content)

    return {
      slug: file.replace(/\.mdx?/, ''),
      content,
      frontMatter: {
        ...data,
      },
    }
  })

  return files
}

export async function getContentFile(type: ContentType, slug?: string) {
  const source = slug
    ? fs.readFileSync(path.join(cwd, 'content', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(cwd, 'content', `${type}.mdx`), 'utf8')

  const { data: frontMatter, content } = matter(source)

  return {
    slug,
    content,
    frontMatter,
  }
}

export async function getAllContentFrontMatter(type: ContentType) {
  const contentFiles = fs.readdirSync(path.join(cwd, 'content', type))

  return contentFiles.reduce((files, slug) => {
    const source = fs.readFileSync(path.join(cwd, 'content', type, slug), 'utf8')
    const { data } = matter(source)

    return [
      {
        ...data,
        slug: slug.replace('.mdx', ''),
      },
      ...files,
    ]
  }, [])
}
