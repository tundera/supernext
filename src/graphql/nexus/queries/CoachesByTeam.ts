import gql from 'graphql-tag'

export default gql`
  query CoachesByTeamQuery($id: Int) {
    coachesByTeam(id: $id) {
      id
      name
    }
  }
`
