import gql from 'graphql-tag'

export default gql`
  query PlayersByTeamQuery($id: Int) {
    playersByTeam(id: $id) {
      id
      name
    }
  }
`
