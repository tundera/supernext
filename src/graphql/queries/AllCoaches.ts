import gql from 'graphql-tag'

export default gql`
  query AllCoaches {
    coaches {
      id
      name
      team {
        name
      }
    }
  }
`
