import gql from 'graphql-tag'

export default gql`
  query BlogPostsQuery($limit: IntType) {
    allBlogPosts(first: $limit) {
      id
      title
      author
      publishedDate
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
