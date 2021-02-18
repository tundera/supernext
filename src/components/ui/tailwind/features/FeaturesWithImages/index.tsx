import type { FC } from 'react'

import { useColorModeValue, Box, Image, Heading } from '@chakra-ui/react'
import FeaturesList from '@components/ui/tailwind/features/FeaturesWithImages/FeaturesList'

const FeaturesWithImages: FC = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.900', 'white')

  return (
    <Box position="relative" bg={bg} p="4">
      <Box
        display={{ lg: 'grid' }}
        alignItems={{ lg: 'center' }}
        gridGap={{ lg: '12' }}
        gridTemplateColumns={{ lg: 'repeat(2, minmax(0, 1fr))' }}
        gridAutoFlow="row dense"
      >
        <Box pl={{ md: '20' }} gridColumnStart={{ lg: '2' }}>
          <Heading
            as="h4"
            color={textColor}
            fontSize="2xl"
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight={{ base: '8', sm: '9' }}
          >
            Manage everything
          </Heading>
          <FeaturesList />
        </Box>

        <Box position="relative" mt="10" mx={{ base: '-4', md: '-12' }} gridColumnStart={{ lg: '1' }}>
          <Image
            src="/static/images/tailwind/object/8.jpg"
            mx="auto"
            w="auto"
            shadow="lg"
            position="relative"
            rounded="base"
            alt="illustration"
          />
        </Box>
      </Box>
    </Box>
  )
}

export default FeaturesWithImages
