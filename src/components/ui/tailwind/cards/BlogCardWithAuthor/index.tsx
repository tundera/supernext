import type { FC } from 'react'

import NextLink from 'next/link'
import { useColorModeValue, Box, LinkBox, Image, Link, LinkOverlay, Text, Flex } from '@chakra-ui/react'

const BlogCardWithAuthor: FC = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('gray.800', 'white')
  const altColor = useColorModeValue('gray.400', 'gray.300')

  return (
    <Box w={{ base: '60', md: '80' }} h="90" m="auto" overflow="hidden" cursor="pointer" shadow="lg" rounded="lg">
      <LinkBox as="article" w="full" h="full" display="block">
        <Image alt="blog photo" src="/static/images/tailwind/blog/1.jpg" maxH="40" w="full" objectFit="cover" />
        <Box bg={bg} w="full" p="4">
          <NextLink href="#" passHref>
            <LinkOverlay>
              <Text color="indigo.500" fontSize="md" fontWeight="medium">
                Article
              </Text>
              <Text color={color} fontSize="xl" fontWeight="medium" mb="2">
                New Mac is here !
              </Text>
              <Text color={altColor} fontWeight="light" fontSize="md">
                The new supermac is here, 543 cv and 140 000$. This is best racing computer about 7 years on...
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
                  <Text color={color}>Jean Jacques</Text>
                  <Text color={altColor}>20 mars 2029 - 6 min read</Text>
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
