import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import type { BlogPost } from 'types/datocms'

// import Head from 'next/head'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { Image /* , renderMetaTags */ } from 'react-datocms'
import { Box, Heading, Text } from '@chakra-ui/react'

import PageLayout from '@layouts/PageLayout'
import BlogPostLayout from '@layouts/BlogPostLayout'
import { getSingleBlogPost, getAllBlogPosts } from '@lib/datocms/blog'
import { getBlogPostSeo } from '@lib/datocms/seo'

type Props = {
  post: BlogPost
  metaTags?: any
}

export const getStaticProps: GetStaticProps = async ({ params, preview }) => {
  const slug = params?.slug as string
  const post = await getSingleBlogPost(slug, preview)

  const data = await getBlogPostSeo(slug)
  const metaTags = data.blogPost.seo.concat(data.site.favicon)
  // console.dir(metaTags, { colors: true, depth: 2 })

  return {
    props: {
      post,
      metaTags,
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

const BlogPostPage: NextPage<Props> = ({ post /* , metaTags */ }) => {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <div>
      {/* <Head>{renderMetaTags(metaTags)}</Head> */}
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
    </div>
  )
}

export default BlogPostPage
