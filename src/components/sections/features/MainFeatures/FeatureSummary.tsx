import type { ElementType, FC } from 'react'

import { chakra, Heading, Flex, Icon, useColorModeValue } from '@chakra-ui/react'

type Props = {
  icon: ElementType<any>
  title: string
}

const FeatureSummary: FC<Props> = ({ icon, title, children }) => {
  return (
    <Flex direction="column" align="center">
      <Icon as={icon} w={{ base: '32', sm: '48', lg: '64' }} h={{ base: '32', sm: '48', lg: '64' }} pb="4" />
      <Heading
        my={3}
        fontSize={{ base: 'lg', sm: 'xl', lg: '2xl' }}
        lineHeight="shorter"
        fontWeight="bold"
        color="gray.900"
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
