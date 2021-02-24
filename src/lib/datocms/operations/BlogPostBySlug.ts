import ResponsiveImage from '@lib/datocms/fragments/ResponsiveImage'

const BlogPostBySlug = `
  query BlogPostBySlugQuery($slug: String) {
    blogPost(filter: { slug: { eq: $slug } }) {
      id
      title
      author {
        name
        hometown
        jobTitle
        photo {
            responsiveImage(imgixParams: {crop: faces, h: "50", w: "50"}) {
                ...ResponsiveImageFragment
            }
        }
      }
      date
      slug
      content
      coverImage {
        responsiveImage(imgixParams: { fit: crop, auto: format }) {
          ...ResponsiveImageFragment
        }
      }
    }
  }

  ${ResponsiveImage}
`

export default BlogPostBySlug
