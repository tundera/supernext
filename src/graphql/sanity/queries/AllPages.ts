import gql from 'graphql-tag'

export default gql`
  query AllPages {
    allPage {
      title
      slug {
        current
      }
    }
  }
`
