import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import type { BlogPost } from 'types/datocms'

import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { Box, Heading, Text } from '@chakra-ui/react'
import { Image } from 'react-datocms'

import PageLayout from '@layouts/PageLayout'
import BlogPostLayout from '@layouts/BlogPostLayout'
import { getSingleBlogPost, getAllBlogPosts } from '@lib/datocms/blog'

type Props = {
  post: BlogPost
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const post = await getSingleBlogPost(slug)

  return {
    props: {
      post,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allBlogPosts = await getAllBlogPosts()

  return {
    paths: allBlogPosts.map((post) => `/blog/${post?.slug}`) || [],
    fallback: true,
  }
}

const BlogPostPage: NextPage<Props> = ({ post }) => {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <PageLayout>
      <BlogPostLayout>
        <Box mb={2}>
          <Heading>{post?.title}</Heading>
          {post?.coverImage && <Image data={post?.coverImage?.responsiveImage} />}
          {post?.publishedDate && <Text opacity="0.6">{post?.publishedDate}</Text>}
        </Box>
        <Text>{post?.content}</Text>
      </BlogPostLayout>
    </PageLayout>
  )
}

export default BlogPostPage
