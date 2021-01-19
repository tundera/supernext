import gql from 'graphql-tag'

export default gql`
  query CoachesByTeam($id: Int) {
    coachesByTeam(id: $id) {
      id
      name
    }
  }
`
