import gql from 'graphql-tag'

export default gql`
  query PlayersByTeam($id: Int) {
    playersByTeam(id: $id) {
      id
      name
    }
  }
`
