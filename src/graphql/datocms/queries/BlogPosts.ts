import gql from 'graphql-tag'

export default gql`
  query BlogPostsQuery($limit: IntType) {
    allBlogPosts(first: $limit) {
      id
      title
      author
      publishedDate
      content
    }
  }
`
