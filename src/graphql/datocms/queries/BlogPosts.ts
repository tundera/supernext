import gql from 'graphql-tag'

import ResponsiveImage from '@graphql/datocms/fragments/ResponsiveImage'

export default gql`
  query BlogPostsQuery($limit: IntType) {
    allBlogPosts(first: $limit) {
      id
      title
      author {
        name
        picture {
          ${ResponsiveImage}
        }
      }
      date
      content(markdown: true)
      slug
      coverImage {
        ${ResponsiveImage}
      }
    }
  }
`
