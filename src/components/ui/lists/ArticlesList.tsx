import type { FC } from 'react'
import type { Article } from 'content/types'

import { Box, Text, Heading, List, ListItem, ListIcon } from '@chakra-ui/react'
import { MdBookmark } from 'react-icons/md'
import NextLink from 'next/link'

interface Props {
  title: string
  articles?: Article[]
}

const ArticlesList: FC<Props> = ({ title, articles }) => {
  return (
    <Box bg="purple.100" p={2} borderRadius={8} alignItems="center" justifyContent="center">
      <Heading p={2} my={1}>
        {title}
      </Heading>
      {articles ? (
        <List spacing={3}>
          {articles.map((article) => (
            <ListItem key={article.slug}>
              <ListIcon as={MdBookmark} />
              <NextLink href={`/blog/${article.slug}`}>{article.frontMatter.title}</NextLink>
            </ListItem>
          ))}
        </List>
      ) : (
        <Text textAlign="center">No recent articles.</Text>
      )}
    </Box>
  )
}

export default ArticlesList
