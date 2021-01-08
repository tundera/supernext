import type { GetStaticProps, NextPage } from 'next'
import type { BlogPost } from 'src/types/blog'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Heading, Stack } from '@chakra-ui/react'

import PageLayout from '@layouts/PageLayout'
import PostsList from '@components/PostsList'

type Props = {
  posts: BlogPost[]
}

const root = process.cwd()

const BlogPage: NextPage<Props> = ({ posts }) => {
  return (
    <PageLayout title="Blog Posts">
      <Stack spacing={8}>
        <Heading as="h1" size="xl">
          Chakra Base
        </Heading>
        <PostsList title="Recent Blog Posts" posts={posts} />
      </Stack>
    </PageLayout>
  )
}

export default BlogPage

export const getStaticProps: GetStaticProps = async () => {
  const postsRoot = path.join(root, 'content', 'posts')
  const posts = fs.readdirSync(postsRoot).map((p) => {
    const content = fs.readFileSync(path.join(postsRoot, p), 'utf8')

    return {
      slug: p.replace(/\.mdx?/, ''),
      content,
      frontMatter: matter(content).data,
    }
  })

  return {
    props: {
      posts,
    },
  }
}
