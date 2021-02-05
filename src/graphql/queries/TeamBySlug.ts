import gql from 'graphql-tag'

export default gql`
  query TeamBySlug($slug: String!) {
    team(slug: $slug) {
      id
      name
      city
      established
      logo
      logoSlug
      colorScheme {
        primary
        secondary
      }
    }
  }
`
