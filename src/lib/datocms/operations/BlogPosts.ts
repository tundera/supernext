import ResponsiveImage from '@lib/datocms/fragments/ResponsiveImage'

const BlogPostsQuery = `
  query BlogPostsQuery($limit: IntType) {
    allBlogPosts(first: $limit) {
      id
      title
      author {
        name
        hometown
        jobTitle
        photo {
          responsiveImage(imgixParams: {crop: faces, h: "50", w: "50"}) {
            ...ResponsiveImageFragment
          }
        }
      }
      date
      content
      slug
      coverImage {
        responsiveImage {
          ...ResponsiveImageFragment
        }
      }
    }
  }

  ${ResponsiveImage}
`
export default BlogPostsQuery
