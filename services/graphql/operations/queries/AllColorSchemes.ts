import gql from 'graphql-tag'

export default gql`
  query AllColorSchemes {
    allColorSchemes {
      id
      primary
      secondary
      teamId
    }
  }
`
