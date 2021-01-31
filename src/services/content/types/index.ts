export type FrontMatter = {
  [key: string]: any
}

export type Article = {
  slug: string
  content: string
  frontMatter: FrontMatter
}
