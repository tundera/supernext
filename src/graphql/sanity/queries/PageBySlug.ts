import gql from 'graphql-tag'

export default gql`
  query PageBySlug($slug: String!) {
    allPage(where: { slug: { current: { eq: $slug } } }) {
      title
      content
    }
  }
`
