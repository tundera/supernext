import TimeAgo from 'timeago-react'
import { Flex, Box, Avatar, Badge, Text } from '@chakra-ui/react'
import { paramCase } from 'change-case'
import { createImageUrl } from 'utils/sanity'

function PostCard({ slug, author, date, title }) {
  return (
    <Box
      key={slug?.current}
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bgColor="gray.300"
      as="a"
      href={`/blog/${slug.current || slug}`}
    >
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            <TimeAgo datetime={date} locale="en_US" />
          </Box>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {title}
        </Box>
        <Flex mt="1" as="h6" lineHeight="tight" isTruncated>
          <Avatar
            size="xs"
            name={author?.name || ''}
            src={createImageUrl(author?.avatar?.asset?._ref as string).url() || ''}
          />
          <Badge borderRadius="full" px="2">
            {author?.name}
          </Badge>
        </Flex>
      </Box>
    </Box>
  )
}

const PostsList = ({ posts }) => {
  return (
    <Flex flexDir="column" maxW="1440px" w="100%" mx="auto" paddingX={{ sm: '10', lg: '24' }} boxSizing="border-box">
      {posts.length === 0 && (
        <Text textAlign="center" fontWeight="bold" fontSize="3xl" my="40">
          No posts found!
        </Text>
      )}

      {posts?.map((post) => (
        <PostCard
          key={paramCase(post.title)}
          slug={post.slug}
          author={post.author}
          date={post.date}
          title={post.title}
        />
      ))}
    </Flex>
  )
}

export default PostsList
