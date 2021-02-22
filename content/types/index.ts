export interface FrontMatter {
  title: string
  summary: string
  author: string
  publishedAt: string
  category: string | string[]
  tags: string[]
  image: string
}

export interface Article {
  slug: string
  content: string
  frontMatter: FrontMatter
}

export interface Post {
  slug: string
  content: string
  frontMatter: FrontMatter
}

export interface PostData extends FrontMatter {
  slug: string
}
