import gql from 'graphql-tag'

export default gql`
  query AllPlayers {
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
