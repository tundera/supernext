export type ResponsiveImage = {
  srcSet: string
  webpSrcSet: string
  sizes: string
  src: string
  width: number
  height: number
  aspectRatio: number
  alt: string
  title: string
  base64: string
}

export type CoverImage = {
  responsiveImage: ResponsiveImage
}

export type BlogPost = {
  id: string
  title: string
  author: string
  publishedDate: string
  slug: string
  content: string
  coverImage: CoverImage
}
