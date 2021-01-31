import gql from 'graphql-tag'

export default gql`
  query AllPosts {
    posts {
      id
      title
      content
      published
      author {
        id
        name
        email
      }
    }
  }
`
