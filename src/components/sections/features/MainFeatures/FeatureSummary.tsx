import type { ElementType, FC } from 'react'

import { chakra, Flex, Icon, useColorModeValue } from '@chakra-ui/react'

type Props = {
  icon: ElementType<any>
  title: string
}

const FeatureSummary: FC<Props> = ({ icon, title, children }) => {
  return (
    <Flex direction="column" align={{ base: 'center', md: 'start' }}>
      <Icon as={icon} w={{ base: '32', sm: '48', lg: '64' }} h={{ base: '32', sm: '48', lg: '64' }} pb="4" />
      <chakra.h3
        my={3}
        fontSize={{ base: 'lg', sm: 'xl', lg: '2xl' }}
        lineHeight="shorter"
        fontWeight="bold"
        color="gray.900"
      >
        {title}
      </chakra.h3>
      <chakra.p lineHeight="tall" color={useColorModeValue('gray.600', 'gray.400')}>
        {children}
      </chakra.p>
    </Flex>
  )
}

export default FeatureSummary

export type { Props as FeatureSummaryProps }
