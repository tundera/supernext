import gql from 'graphql-tag'

export default gql`
  query PlayersQuery {
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
