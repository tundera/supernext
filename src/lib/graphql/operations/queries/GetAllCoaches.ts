import gql from 'graphql-tag'

export default gql`
  query {
    allCoaches {
      id
      name
      team {
        name
      }
    }
  }
`
