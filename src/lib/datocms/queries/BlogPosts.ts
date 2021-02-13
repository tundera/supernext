import ResponsiveImageFragment from '@lib/datocms/fragments/ResponsiveImage'

const BlogPostsQuery = `
query BlogPostsQuery($limit: IntType) {
  allBlogPosts(first: $limit) {
    id
    title
    author {
      name
      picture {
        responsiveImage {
          ...ResponsiveImageFragment
        }
      }
    }
    date
    content(markdown: true)
    slug
    coverImage {
      responsiveImage {
        ...ResponsiveImageFragment
      }
    }
  }
}

${ResponsiveImageFragment}
`
export default BlogPostsQuery
