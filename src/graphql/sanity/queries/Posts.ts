import gql from 'graphql-tag'

import { DEFAULT_POSTS_LIMIT } from 'constants/sanity'

export default gql`
  query Posts($limit: Int) {
    allPost(limit: $limit = ${DEFAULT_POSTS_LIMIT}) {
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
