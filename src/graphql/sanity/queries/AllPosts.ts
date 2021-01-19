import gql from 'graphql-tag'

export default gql`
  query AllPosts {
    allPost {
      title
      slug {
        current
      }
    }
  }
`
