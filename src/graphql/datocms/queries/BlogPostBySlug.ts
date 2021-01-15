import gql from 'graphql-tag'

export default gql`
  query BlogPostBySlugQuery($slug: String) {
    blogPost(filter: { slug: { eq: $slug } }) {
      id
      title
      author
      publishedDate
      slug
      content
      coverImage {
        responsiveImage(imgixParams: { fit: crop, w: 500, h: 300, auto: format }) {
          srcSet
          webpSrcSet
          sizes
          src
          width
          height
          aspectRatio
          alt
          title
          base64
        }
      }
    }
  }
`
