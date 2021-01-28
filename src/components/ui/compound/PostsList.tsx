import TimeAgo from 'timeago-react'
import { Flex, Box, Avatar, Badge, Text } from '@chakra-ui/react'

import { createImageUrl } from 'utils/sanity'

const PostsList = ({ posts }) => {
  return (
    <Flex flexDir="column" maxW="1440px" w="100%" mx="auto" paddingX={{ sm: '10', lg: '24' }} boxSizing="border-box">
      {posts.length === 0 && (
        <Text textAlign="center" fontWeight="bold" fontSize="3xl" my="40">
          No posts found!
        </Text>
      )}

      {posts?.map((post) => (
        <Box
          key={post.slug?.current}
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          bgColor="gray.300"
          as="a"
          href={`/blog/${post.slug.current || post.slug}`}
        >
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                {post.author?.name}
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                <TimeAgo datetime={post.date} locale="en_US" />
              </Box>
            </Box>

            <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
              {post.title}
            </Box>
            <Box mt="1" as="h6" lineHeight="tight" isTruncated>
              <Avatar
                size="2xs"
                name={post.author?.name || ''}
                src={createImageUrl(post.author?.asset?._ref as string).url() || ''}
              />
            </Box>
          </Box>
        </Box>
      ))}
    </Flex>
  )
}

export default PostsList
