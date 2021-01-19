import gql from 'graphql-tag'

export default gql`
  query AllCoachesQuery {
    allCoaches {
      id
      name
      team {
        name
      }
    }
  }
`
