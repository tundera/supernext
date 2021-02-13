import ResponsiveImageFragment from '@lib/datocms/fragments/ResponsiveImage'

const BlogPostBySlugQuery = `
  query BlogPostBySlugQuery($slug: String) {
    blogPost(filter: { slug: { eq: $slug } }) {
      id
      title
      author {
        name
        picture {
          responsiveImage {
            ...ResponsiveImageFragment
          }
        }
      }
      date
      slug
      content(markdown: true)
      coverImage {
        responsiveImage(imgixParams: { fit: crop, auto: format }) {
          ...ResponsiveImageFragment
        }
      }
    }
  }

  ${ResponsiveImageFragment}
`

export default BlogPostBySlugQuery
