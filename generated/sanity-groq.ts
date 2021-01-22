import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
} from 'sanity-codegen'

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
}

/**
 * Author
 *
 *
 */
export interface Author extends SanityDocument {
  _type: 'author'

  /**
   * Name — `string`
   *
   *
   */
  name: string

  /**
   * Avatar — `image`
   *
   *
   */
  avatar?: { _type: 'avatar'; asset: SanityAsset; crop?: SanityImageCrop; hotspot?: SanityImageHotspot }
}

/**
 * Post
 *
 *
 */
export interface Post extends SanityDocument {
  _type: 'post'

  /**
   * Post Title — `string`
   *
   *
   */
  title: string

  /**
   * Author — `reference`
   *
   *
   */
  author: SanityReference<Author>

  /**
   * Date — `datetime`
   *
   *
   */
  date: string

  /**
   * Post Slug — `slug`
   *
   *
   */
  slug: { _type: 'slug'; current: string }

  /**
   * Cover Image — `image`
   *
   *
   */
  coverImage?: { _type: 'coverImage'; asset: SanityAsset; crop?: SanityImageCrop; hotspot?: SanityImageHotspot }

  /**
   * Excerpt — `string`
   *
   *
   */
  excerpt?: string

  /**
   * Content — `markdown`
   *
   *
   */
  content: Markdown
}

export type Documents = Author | Post

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Markdown = any
