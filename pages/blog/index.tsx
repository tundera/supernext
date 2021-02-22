import type { GetStaticProps } from 'next'
import type { CustomNextPage as NextPage } from 'types'
import type { Post } from 'content/types'

import { Flex, Stack, Heading } from '@chakra-ui/react'
import { getLayout } from '@components/layouts/SiteLayout'
import { POSTS_PER_PAGE } from 'src/utils/constants'
import PostsList from '@components/ui/lists/PostsList'
import Pagination from '@components/utility/Pagination'
import { getContentFiles } from '@lib/content'

interface Props {
  posts: Post[]
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getContentFiles('posts')

  return {
    props: {
      posts,
    },
    revalidate: 1,
  }
}

const PostsPage: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <Flex alignItems="center" justifyContent="center">
        <Stack spacing={8}>
          <Heading as="h1" size="xl">
            Posts
          </Heading>
          <PostsList title="Recent Posts" posts={posts} />
          <Pagination />
        </Stack>
      </Flex>
    </>
  )
}

PostsPage.getLayout = getLayout

export default PostsPage
