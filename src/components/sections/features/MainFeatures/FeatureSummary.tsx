import type { ElementType, FC } from 'react'

import { chakra, Heading, Flex, Icon, useColorModeValue } from '@chakra-ui/react'

interface Props {
  icon: ElementType<any>
  title: string
}

const FeatureSummary: FC<Props> = ({ icon, title, children }) => {
  const bg = useColorModeValue('whiteAlpha.900', 'brand.800')

  return (
    <Flex direction="column" align="center" boxShadow="xl" bg={bg} py="8" px="6" borderRadius={8}>
      <Icon as={icon} w={{ base: '32', sm: '48', lg: '64' }} h={{ base: '32', sm: '48', lg: '64' }} py="4" />
      <Heading
        my={3}
        fontSize={{ base: 'lg', sm: 'xl', lg: '2xl' }}
        lineHeight="shorter"
        fontWeight="bold"
        color={useColorModeValue('gray.600', 'gray.400')}
      >
        {title}
      </Heading>
      <chakra.p
        textAlign="center"
        lineHeight="tall"
        color={useColorModeValue('gray.600', 'gray.400')}
        fontSize={{ base: 'md', lg: 'lg' }}
        mx={[2, 4]}
      >
        {children}
      </chakra.p>
    </Flex>
  )
}

export default FeatureSummary

export type { Props as FeatureSummaryProps }
