import type { FC, ReactNode } from 'react'

import { chakra, useColorModeValue, Flex, Icon, Box } from '@chakra-ui/react'

interface Props {
  title: string
  icon: ReactNode
}

const CourseDetail: FC<Props> = ({ title, icon, children }) => {
  const color = useColorModeValue('gray.500', 'gray.400')

  return (
    <Flex>
      <Flex shrink={0}>
        <Flex alignItems="center" justifyContent="center" h={12} w={12} borderRadius="md" bg="brand.500" color="white">
          <Icon boxSize={6} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {icon}
          </Icon>
        </Flex>
      </Flex>
      <Box ml={4}>
        <chakra.dt fontSize="lg" fontWeight="medium" lineHeight="6" color="gray.900">
          {title}
        </chakra.dt>
        <chakra.dd mt={2} color={color}>
          {children}
        </chakra.dd>
      </Box>
    </Flex>
  )
}

export default CourseDetail

export type { Props as CourseDetailProps }
