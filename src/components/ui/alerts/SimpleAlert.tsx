import type { FC } from 'react'
import type { IconType } from 'react-icons/lib'

import { chakra, Box, Icon, Flex, useColorModeValue } from '@chakra-ui/react'

import { IoMdAlert, IoMdCheckmarkCircle } from 'react-icons/io'
import { BsLightningFill } from 'react-icons/bs'

interface Props {
  type: 'success' | 'error' | 'warning' | 'info'
  message: string
}

const IconMap = new Map<string, IconType>()

IconMap.set('success', IoMdCheckmarkCircle)
IconMap.set('error', BsLightningFill)
IconMap.set('warning', IoMdAlert)
IconMap.set('info', IoMdAlert)

const ColorMap = new Map<string, string>()
ColorMap.set('success', 'green')
ColorMap.set('error', 'red')
ColorMap.set('warning', 'yellow')
ColorMap.set('info', 'blue')

const InfoAlert: FC<Props> = ({ type, message }) => {
  const color = ColorMap.get(type)
  const icon = IconMap.get(type)

  return (
    <Flex w="full" bg="gray.600" p={50} alignItems="center" justifyContent="center">
      <Flex
        maxW="sm"
        width="100%"
        mx="auto"
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow="md"
        borderRadius="lg"
        overflow="hidden"
      >
        <Flex justifyContent="center" alignItems="center" w={12} bg={`${color}.500`}>
          <Icon as={icon} color="white" boxSize={6} />
        </Flex>

        <Box mx={-3} py={2} px={4}>
          <Box mx={3}>
            <chakra.span
              color={useColorModeValue(`${color}.500`, `${color}.400`)}
              fontWeight="bold"
              textTransform="capitalize"
            >
              {type}
            </chakra.span>
            <chakra.p color={useColorModeValue('gray.600', 'gray.200')} fontSize="sm">
              {message}
            </chakra.p>
          </Box>
        </Box>
      </Flex>
    </Flex>
  )
}

export default InfoAlert
