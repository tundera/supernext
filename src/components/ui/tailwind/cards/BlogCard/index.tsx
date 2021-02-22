import type { FC } from 'react'

import NextLink from 'next/link'
import {
  useColorModeValue,
  chakra,
  Box,
  LinkBox,
  LinkOverlay,
  Image,
  Heading,
  Text,
  Flex,
  Button,
} from '@chakra-ui/react'

const BlogCard: FC = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const titleColor = useColorModeValue('gray.800', 'white')
  const excerptColor = useColorModeValue('gray.400', 'gray.300')

  return (
    <Box w={{ base: '60', md: '80' }} h="90" m="auto" overflow="hidden" cursor="pointer" shadow="lg" rounded="lg">
      <LinkBox as="article" w="full" h="full" display="block">
        <Image alt="blog photo" src="/static/images/tailwind/blog/1.jpg" maxH="40" w="full" objectFit="cover" />
        <Box bg={bg} w="full" p="4">
          <NextLink href="#" passHref>
            <LinkOverlay>
              <Text color="indigo.500" fontSize="md" fontWeight="medium"></Text>
              <Text color={titleColor} fontSize="xl" fontWeight="medium" mb="2">
                New Mac is here !
              </Text>
              <Text color={excerptColor} fontWeight="light" fontSize="md">
                The new supermac is here, 543 cv and 140 000$. This is best racing computer about 7 years on...
              </Text>
            </LinkOverlay>
          </NextLink>
        </Box>
      </LinkBox>
    </Box>
  )
}

export default BlogCard
