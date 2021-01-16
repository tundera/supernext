import gql from 'graphql-tag'

export default gql`
  query PageSeoQuery($title: String) {
    site: _site {
      favicon: faviconMetaTags {
        attributes
        content
        tag
      }
    }
    page(filter: { title: { eq: $title } }) {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }
`
