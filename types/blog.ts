export type FrontMatter = {
  coverImage?: string
  category: string
  date: string
  description: string
  tags: string[]
  title: string
  githubLink?: string
  demoLink?: string
}

export type BlogPost = {
  slug: string
  content: string
  frontMatter: FrontMatter
}