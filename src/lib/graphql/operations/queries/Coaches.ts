import gql from 'graphql-tag'

export default gql`
  query CoachesQuery {
    allCoaches {
      id
      name
      team {
        name
      }
    }
  }
`
