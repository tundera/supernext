import gql from 'graphql-tag'

export default gql`
  query AllPagesQuery {
    allPage {
      title
      slug {
        current
      }
    }
  }
`
