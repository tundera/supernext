import type { FC } from 'react'

import NextLink from 'next/link'
import { chakra, useColorModeValue, Text, Flex, Box, Link, Avatar } from '@chakra-ui/react'

interface Props {
  slug: string
  author: any
  date: string
  title: string
}

const BlogPost: FC<Props> = ({ slug, author, date, title }) => {
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
            {date}
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
            href={`/blog/${slug}`}
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
            <Link
              color={useColorModeValue('gray.700', 'gray.200')}
              fontWeight="700"
              cursor="pointer"
              as={NextLink}
              href="#"
            >
              {author.name}
            </Link>
            <Avatar size="sm" src={author.photo.responsiveImage.src} mx="2" />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  )
}

export default BlogPost

export type { Props as BlogPostProps }
