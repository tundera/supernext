import gql from 'graphql-tag'

export default gql`
  query AllCoaches {
    allCoaches {
      id
      name
      team {
        name
      }
    }
  }
`
