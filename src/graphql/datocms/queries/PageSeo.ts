import gql from 'graphql-tag'

export default gql`
  query PageSeoQuery {
    site: _site {
      favicon: faviconMetaTags {
        attributes
        content
        tag
      }
    }
    blogPost {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }
`
