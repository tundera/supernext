import type { FC } from 'react'
import type { PostData } from 'content/types'

import NextLink from 'next/link'
import { useColorModeValue, Box, LinkBox, Image, Link, LinkOverlay, Text, Flex } from '@chakra-ui/react'

interface Props {
  post: PostData
}

const BlogCardWithAuthor: FC<Props> = ({ post }) => {
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('gray.800', 'white')
  const altColor = useColorModeValue('gray.400', 'gray.300')

  return (
    <Box w={{ base: '60', md: '80' }} h="90" m="auto" overflow="hidden" cursor="pointer" shadow="lg" rounded="lg">
      <LinkBox as="article" w="full" h="full" display="block">
        <Image alt="blog photo" src={post.image} maxH="40" w="full" objectFit="cover" />
        <Box bg={bg} w="full" p="4">
          <NextLink href={`/blog/${post.slug}`} passHref>
            <LinkOverlay>
              <Text textTransform="capitalize" color="indigo.500" fontSize="md" fontWeight="medium">
                {post.category}
              </Text>
              <Text color={color} fontSize="xl" fontWeight="medium" mb="2">
                {post.title}
              </Text>
              <Text color={altColor} fontWeight="light" fontSize="md">
                {post.summary}
              </Text>
              <Flex className="flex items-center mt-4">
                <Link display="block" position="relative" href="#">
                  <Image
                    mx="auto"
                    rounded="full"
                    w="10"
                    h="10"
                    objectFit="cover"
                    alt="profile"
                    src="/static/images/tailwind/person/6.jpg"
                  />
                </Link>
                <Flex
                  direction="column"
                  justify="space-between"
                  ml="4"
                  fontSize="sm"
                  className="flex flex-col justify-between ml-4 text-sm"
                >
                  <Text color={color}>{post.author}</Text>
                  <Text color={altColor}>{post.publishedAt} - 6 min read</Text>
                </Flex>
              </Flex>
            </LinkOverlay>
          </NextLink>
        </Box>
      </LinkBox>
    </Box>
  )
}

export default BlogCardWithAuthor

export type { Props as BlogCardWithAuthorProps }
