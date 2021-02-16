import type { FC } from 'react'

import Image from 'next/image'
import { chakra, Box, Flex, useColorModeValue } from '@chakra-ui/react'

interface Props {
  name: string
  description: string
  imageUrl: string
  price: number
}

const ProductCard: FC<Props> = ({ name, description, imageUrl, price }) => {
  const bg = useColorModeValue('brand.500', 'whiteAlpha.900')
  return (
    <Flex bg="gray.600" p={50} w="full" alignItems="center" justifyContent="center">
      <Box maxW="xs" mx="auto" bg={useColorModeValue('white', 'gray.800')} boxShadow="lg" borderRadius="lg">
        <Box px={4} py={2}>
          <chakra.h1
            color={useColorModeValue('gray.800', 'white')}
            fontWeight="bold"
            fontSize="3xl"
            textTransform="uppercase"
          >
            {name}
          </chakra.h1>
          <chakra.p mt={1} fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
            {description}
          </chakra.p>
        </Box>

        <Box mt={2} opacity="65%" bg={bg}>
          <Image width={150} height={100} layout="responsive" objectFit="cover" src={imageUrl} />
        </Box>

        <Flex alignItems="center" justifyContent="space-between" px={4} py={2} bg="gray.900" borderBottomRadius="lg">
          <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
            {price}
          </chakra.h1>
          <chakra.button
            px={2}
            py={1}
            bg="white"
            fontSize="xs"
            color="gray.900"
            fontWeight="bold"
            borderRadius="lg"
            textTransform="uppercase"
            _hover={{
              bg: 'gray.200',
            }}
            _focus={{
              bg: 'gray.400',
            }}
          >
            Add to cart
          </chakra.button>
        </Flex>
      </Box>
    </Flex>
  )
}

export default ProductCard

export type { Props as ProductCardProps }
