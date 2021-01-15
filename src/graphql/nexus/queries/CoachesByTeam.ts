import gql from 'graphql-tag'

export default gql`
  query CoachesByTeamQuery($id: Int) {
    playersByTeam(id: $id) {
      id
      name
    }
  }
`
