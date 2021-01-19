import gql from 'graphql-tag'

export default gql`
  query PostBySlug($slug: String!) {
    allPost(where: { slug: { current: { eq: $slug } } }) {
      title
      content
    }
  }
`
