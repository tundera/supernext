import gql from 'graphql-tag'

export default gql`
  query TeamsQuery {
    allTeams {
      id
      name
      city
    }
  }
`
