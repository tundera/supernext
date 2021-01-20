import gql from 'graphql-tag'

export default gql`
  query Posts($limit: Int) {
    allPost(limit: $limit) {
      title
      author {
        name
        avatar {
          asset {
            url
          }
        }
      }
      excerpt
      coverImage {
        asset {
          url
        }
      }
      slug {
        current
      }
    }
  }
`
