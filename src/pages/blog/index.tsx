import type { GetStaticProps, NextPage } from 'next'
import type { BlogPost } from 'types/datocms'

import Head from 'next/head'
import { Heading, Stack, Box, Badge, Divider, Avatar } from '@chakra-ui/react'
import { Image, renderMetaTags, SeoMetaTagType, useQuerySubscription } from 'react-datocms'

import ConnectionStatus from '@components/live/ConnectionStatus'
import ConnectionError from '@components/live/ConnectionError'
import PageLayout from '@layouts/PageLayout'
import { getAllBlogPosts } from '@lib/datocms/blog'
import { getPageSeo } from '@lib/datocms/seo'
import BlogPostsQuery from '@graphql/datocms/queries/BlogPosts'

type Props = {
  subscription: any
  metaTags: SeoMetaTagType[]
  preview: boolean
}

const title = 'Blog'

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const data = await getPageSeo(title)
  const metaTags = data.page.seo.concat(data.site.favicon)

  const graphqlRequest = {
    query: BlogPostsQuery,
    variables: { limit: 10 },
    preview,
  }

  const posts: BlogPost[] = await getAllBlogPosts(preview)

  const subscription = preview
    ? {
        ...graphqlRequest,
        initialData: posts,
        token: process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN,
      }
    : {
        enabled: false,
        initialData: posts,
      }

  return {
    props: {
      subscription,
      metaTags,
      preview,
    },
  }
}

const BlogPage: NextPage<Props> = ({ subscription, metaTags, preview }) => {
  const { data: posts, status, error } = useQuerySubscription(subscription)

  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <PageLayout preview={preview}>
        <Heading as="h1" size="xl" mt={8} textAlign="center">
          Blog
        </Heading>
        <ConnectionStatus status={status} />
        {error && <ConnectionError error={error} />}
        {posts && (
          <Stack spacing={8} bgColor="gray.100" alignItems="center" py="6">
            {posts.map((post: any) => (
              <>
                <Box
                  maxW="sm"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  bgColor="gray.300"
                  as="a"
                  href={`/blog/${post.slug}`}
                >
                  <Image data={post.coverImage.responsiveImage} />

                  <Box p="6">
                    <Box d="flex" alignItems="baseline">
                      <Badge borderRadius="full" px="2" colorScheme="teal">
                        {post.author.name}
                      </Badge>
                      <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                      >
                        {post.date}
                      </Box>
                    </Box>

                    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                      {post.title}
                    </Box>
                    <Box mt="1" as="h6" lineHeight="tight" isTruncated>
                      <Avatar size="2xs" name={post.author.name} src={post.author.picture.responsiveImage.src} />
                    </Box>
                  </Box>
                </Box>
                <Divider />
              </>
            ))}
          </Stack>
        )}
      </PageLayout>
    </>
  )
}

export default BlogPage
