import type { FC } from 'react'

import { Heading, Image, Text, Box, Flex } from '@chakra-ui/react'

const Animated404: FC = () => {
  return (
    <Box bg="indigo.900" position="relative" overflow="hidden" h="100vh">
      <Image src="/static/images/tailwind/landscape/8.svg" position="absolute" h="full" w="full" objectFit="cover" />
      <Box inset="0" bg="black" opacity="25%" position="absolute"></Box>
      <Flex
        position="relative"
        align="center"
        w="100%"
        maxW={{
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        }}
        mx="auto"
        px={{ base: '6', md: '12' }}
        py={{ base: '32', xl: '40' }}
        zIndex="10"
      >
        <Flex position="relative" w="full" fontFamily="mono" direction="column" align="center" zIndex="10">
          <Heading as="h1" className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
            You&#x27;re alone here
          </Heading>
          <Text my="44" color="white" fontSize="8xl" fontWeight="extrabold" animation="bounce 1s infinite">
            404
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Animated404
