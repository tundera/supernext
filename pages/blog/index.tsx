import type { GetStaticProps } from 'next'
import type { CustomNextPage as NextPage } from 'types'
import type { PostData } from 'content/types'

import { useState } from 'react'
import { createIcon, Flex, Stack, Heading, Box, Input, Text, useColorModeValue } from '@chakra-ui/react'
import { getLayout } from '@components/layouts/SiteLayout'
import { POSTS_PER_PAGE } from 'src/utils/constants'
import PostsList from '@components/ui/lists/PostsList'
import Pagination from '@components/utility/Pagination'
import { getAllContentFrontMatter } from '@lib/content'

interface Props {
  posts: PostData[]
}

const SearchIcon = createIcon({
  displayName: 'SearchIcon',
  viewBox: '0 0 24 24',
  path: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  ),
})

export const getStaticProps: GetStaticProps = async () => {
  // const posts = await getContentFiles('posts')
  const posts = await getAllContentFrontMatter('posts')

  return {
    props: {
      posts,
    },
    revalidate: 1,
  }
}

const PostsPage: NextPage<Props> = ({ posts }) => {
  const headingColor = useColorModeValue('black', 'white')
  const resultsColor = useColorModeValue('gray.600', 'gray.400')
  const iconColor = useColorModeValue('gray.400', 'gray.300')
  const borderColor = useColorModeValue('gray.300', 'gray.900')
  const searchColor = useColorModeValue('gray.900', 'gray.100')
  const searchBg = useColorModeValue('white', 'gray.800')

  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
    .filter((frontMatter) => frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <>
      <Flex alignItems="center" justifyContent="center">
        <Stack spacing={8}>
          <Heading as="h1" size="xl">
            Posts
          </Heading>
          <Box position="relative" w="full" mb="4">
            <Input
              type="text"
              aria-label="Search posts"
              display="block"
              w="full"
              px="4"
              py="2"
              borderWidth="1px"
              borderColor={borderColor}
              rounded="md"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search posts"
              sx={{
                '--tw-ring-opacity': '1',
                '--tw-ring-color': 'rgba(99, 102, 241, var(--tw-ring-opacity))',
                '--tw-ring-offset-width': '2px',
                '--tw-ring-offset-color': '#ddd6fe',
                '--tw-ring-offset-shadow':
                  'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
                '--tw-ring-shadow':
                  'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
              }}
              _focus={{
                outlineColor: 'var(--tw-ring-color)',
                outline: '2px solid transparent',
                outlineOffset: '2px',
                borderColor: 'transparent',
                boxShadow: 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
              }}
            />
            <SearchIcon
              fill="none"
              stroke="currentColor"
              position="absolute"
              right="3"
              top="3"
              h="5"
              w="5"
              color={iconColor}
            />
          </Box>
          <Heading
            as="h3"
            mb="4"
            mt="8"
            letterSpacing="tight"
            fontWeight="bold"
            fontSize={{ base: '2xl', md: '4xl' }}
            color={headingColor}
          >
            All Posts
          </Heading>
          {!filteredBlogPosts.length && (
            <Text color={resultsColor} mb="4">
              No posts found.
            </Text>
          )}
          {filteredBlogPosts && <PostsList title="Recent Posts" posts={filteredBlogPosts} />}
          <Pagination />
        </Stack>
      </Flex>
    </>
  )
}

PostsPage.getLayout = getLayout

export default PostsPage
