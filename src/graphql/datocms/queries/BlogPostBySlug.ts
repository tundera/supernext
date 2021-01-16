import gql from 'graphql-tag'

import ResponsiveImage from '@graphql/datocms/fragments/ResponsiveImage'

export default gql`
  query BlogPostBySlugQuery($slug: String) {
    blogPost(filter: { slug: { eq: $slug } }) {
      id
      title
      author {
        name
        picture {
          ${ResponsiveImage}
        }
      }
      date
      slug
      content
      coverImage {
        ${ResponsiveImage}
      }
    }
  }
`
