import { Flex, useColorModeValue, Text } from '@chakra-ui/react'
import { format } from 'light-date'
import BlogPost from '@components/BlogPost'

const PostsList = ({ posts }) => {
  return (
    <Flex flexDir="column" maxW="1440px" w="100%" mx="auto" paddingX={{ sm: '10', lg: '24' }} boxSizing="border-box">
      {posts.length === 0 ? (
        <Text textAlign="center" fontWeight="bold" fontSize="3xl" my="40">
          No posts found!
        </Text>
      ) : (
        posts.map((post) => (
          <BlogPost
            key={post.slug}
            slug={post.slug}
            author={post.author}
            date={format(new Date(post.date), '{MM}/{dd}/{yyyy}')}
            title={post.title}
          />
        ))
      )}
    </Flex>
  )
}

export default PostsList
