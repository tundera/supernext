import TimeAgo from 'timeago-react'
import { chakra, Box, Image, Flex, useColorModeValue, Link, Avatar, Badge, Text } from '@chakra-ui/react'
import { createImageUrl } from 'src/utils/sanity'
import NextLink from 'next/link'

const BlogPost = ({ slug, author, date, title }) => {
  return (
    <Flex bg="gray.600" p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        mx="auto"
        px={8}
        py={4}
        borderRadius="lg"
        boxShadow="lg"
        bg={useColorModeValue('white', 'gray.800')}
        maxW="2xl"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <chakra.span fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
            <TimeAgo datetime={date} locale="en_US" />
          </chakra.span>
          <Link
            px={3}
            py={1}
            bg="gray.600"
            color="gray.100"
            fontSize="sm"
            fontWeight="700"
            borderRadius="md"
            _hover={{ bg: 'gray.500' }}
            as={NextLink}
            href="#"
          >
            Category
          </Link>
        </Flex>

        <Box mt={2}>
          <Link
            fontSize="2xl"
            color={useColorModeValue('gray.700', 'white')}
            fontWeight="700"
            _hover={{
              color: useColorModeValue('gray.600', 'gray.200'),
              textDecor: 'underline',
            }}
            as={NextLink}
            href={`/blog/${slug.current || slug}`}
          >
            {title}
          </Link>
          <chakra.p mt={2} color={useColorModeValue('gray.600', 'gray.300')}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur
            doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi
            ratione libero!
          </chakra.p>
        </Box>

        <Flex justifyContent="space-between" alignItems="center" mt={4}>
          <Text
            color={useColorModeValue('brand.600', 'brand.400')}
            _hover={{ textDecor: 'underline' }}
            href="#"
            as={NextLink}
          >
            Read more
          </Text>

          <Flex alignItems="center">
            <Image
              mx={4}
              w={10}
              h={10}
              objectFit="cover"
              borderRadius="full"
              display={{ base: 'none', sm: 'block' }}
              src={createImageUrl(author?.avatar?.asset?._ref as string).url() || ''}
              alt="avatar"
            />
            <Link
              color={useColorModeValue('gray.700', 'gray.200')}
              fontWeight="700"
              cursor="pointer"
              as={NextLink}
              href="#"
            >
              {author.name}
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Flex>
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
        <BlogPost key={post.slug} slug={post.slug} author={post.author} date={post.date} title={post.title} />
      ))}
    </Flex>
  )
}

export default PostsList
