import type { FC } from 'react'
import type { Newsletter } from 'types/content'

import { Box, Text, Heading, List, ListItem, ListIcon } from '@chakra-ui/react'
import { MdBookmark } from 'react-icons/md'
import NextLink from 'next/link'

type Props = {
  title: string
  newsletters?: Newsletter[]
}

const NewslettersList: FC<Props> = ({ title, newsletters }) => {
  return (
    <Box bg="purple.100" p={2} borderRadius={8} alignItems="center" justifyContent="center">
      <Heading p={2} my={1}>
        {title}
      </Heading>
      {newsletters ? (
        <List spacing={3}>
          {newsletters.map((newsletter) => (
            <ListItem key={newsletter.slug}>
              <ListIcon as={MdBookmark} />
              <NextLink href={`/blog/${newsletter.slug}`}>{newsletter.frontMatter.title}</NextLink>
            </ListItem>
          ))}
        </List>
      ) : (
        <Text textAlign="center">No recent newsletters.</Text>
      )}
    </Box>
  )
}

export default NewslettersList
