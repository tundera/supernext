import gql from 'graphql-tag'

export default gql`
  query AllPlayersQuery {
    allPlayers {
      id
      name
      team {
        name
      }
      position
      number
      height
      weight
    }
  }
`
