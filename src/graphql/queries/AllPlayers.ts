import gql from 'graphql-tag'

export default gql`
  query AllPlayers {
    players {
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
