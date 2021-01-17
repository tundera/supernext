import { ResponsiveImageType, ToMetaTagsType } from 'react-datocms'

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

export type BlogPost = {
  id: string
  title: string
  author: {
    name: string
    picture: ResponsiveImageType
  }
  date: string
  slug: string
  excerpt: string
  content: string
  coverImage: {
    responsiveImage: ResponsiveImageType
  }
}

export type PageSeoType = {
  site: {
    favicon: ToMetaTagsType
  }
  page: {
    seo: ToMetaTagsType
  }
}

export type BlogPostSeoType = {
  site: {
    favicon: ToMetaTagsType
  }
  blogPost: {
    seo: ToMetaTagsType
  }
}

export type BlogPostsVariables = {
  limit: number
}

export type PageSeoVariables = {
  title: string
}

export type BlogPostSeoVariables = {
  slug: string
}

export type QuerySubscriptionStatus = {
  status: 'connecting' | 'connected' | 'closed'
}

export type QuerySubscriptionError = {
  code: string
  message: string
  fatal: boolean
  response?: any
}
