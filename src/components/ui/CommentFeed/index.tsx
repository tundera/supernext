import type { FC } from 'react'

import { useEffect, useState } from 'react'
// import NextLink from 'next/link'
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer'
import { useColorModeValue, chakra, Heading, Text, Box, Flex } from '@chakra-ui/react'

// const Replies = dynamic(() => import('@components/ui/Replies'))

const CommentFeed: FC = () => {
  const bg = useColorModeValue('brand.500', 'whiteAlpha.900')
  const color = useColorModeValue('whiteAlpha.900', 'brand.500')

  // const [ref, inView] = useInView({ triggerOnce: true })
  // const [replies, setReplies] = useState([])

  // useEffect(() => {
  //   getReplies.then((replies) => {
  //     setReplies(replies.links)
  //   })
  // })

  return (
    <Box as="article" bg={bg} color={color}>
      <Text>Add a description for your blog post here.</Text>
      <Box>
        {/* <Text>
          {replies.length > 0
            ? `Already ${replies.length > 1 ? `${replies.length} people` : 'one person'} retweeted this post}`
            : 'Be the first to retweet this post!'}
        </Text> */}
        <br />
      </Box>
      {/* {inView && <Replies replies={replies} />} */}
    </Box>
  )
}

export default CommentFeed
