export type FrontMatter = {
  title: string
  description: string
  author: string[]
  date: string
  category: string
  tags: string[]
  coverImage: string
  githubLink?: string
  demoLink?: string
}

export type Article = {
  slug: string
  content: string
  frontMatter: FrontMatter
}
