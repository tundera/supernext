export type FrontMatter = {
  title: string
  summary: string
  author: string
  publishedAt: string
  category: string | string[]
  tags: string[]
  image: string
}

export type Article = {
  slug: string
  content: string
  frontMatter: FrontMatter
}
