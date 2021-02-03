import gql from 'graphql-tag'

export default gql`
  query TeamBySlug($slug: String!) {
    team(where: { slug: $slug }) {
      id
      name
      city
      established
      logo
      colorScheme {
        primary
        secondary
      }
    }
  }
`
