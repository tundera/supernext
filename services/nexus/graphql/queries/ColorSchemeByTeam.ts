import gql from 'graphql-tag'

export default gql`
  query ColorSchemeByTeam($id: Int) {
    colorSchemeByTeam(id: $id) {
      id
      primary
      secondary
    }
  }
`
