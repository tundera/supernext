import Image from 'next/image'
import { Suspense } from 'react'
import { Flex, Box, Container, Heading, Text } from '@chakra-ui/react'

import PageLayout from '@layouts/PageLayout'
import LoadingSpinner from '@components/LoadingSpinner'
import useBlogPost from '@hooks/data/useBlogPost'
import { createImageUrl } from '@utils/sanity'
import { usePreviewSubscription } from '@lib/sanity'
import { getPostBySlug } from 'services/sanity/posts'

const BlogPost = () => {
  const { post, preview } = useBlogPost()

  const { data } = usePreviewSubscription(getPostBySlug, {
    params: { slug: post.slug.current ?? '' },
    initialData: post,
    enabled: preview,
  })

  return (
    <PageLayout preview={preview}>
      <Flex bg="gray.500" minHeight="100vh" justifyContent="center" mx="150px" py={8}>
        <Container maxW="4xl" centerContent>
          <Box padding="4" bg="gray.100">
            <Heading>{data.title}</Heading>
            <Flex flexDir="column" w="500" h="300" alignItems="center">
              <Suspense fallback={<LoadingSpinner />}>
                <Image
                  src={createImageUrl(data.coverImage?.asset._ref as string).url() || ''}
                  width={500}
                  height={300}
                />
              </Suspense>
            </Flex>
            <Text>{data.author.name}</Text>
            <Text>{data.date}</Text>
            {post.content}
          </Box>
        </Container>
      </Flex>
    </PageLayout>
  )
}

BlogPost.dataHooks = [useBlogPost]

export default BlogPost
