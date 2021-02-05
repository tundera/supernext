import gql from 'graphql-tag'

export default gql`
  query AllTeams {
    teams {
      id
      name
      slug
      city
      logo
      logoSlug
      colorScheme {
        primary
        secondary
      }
    }
  }
`
