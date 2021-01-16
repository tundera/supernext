import gql from 'graphql-tag'

export default gql`
  query BlogPostSeoQuery($slug: String) {
    site: _site {
      favicon: faviconMetaTags {
        attributes
        content
        tag
      }
    }
    blogPost(filter: { slug: { eq: $slug } }) {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }
`
