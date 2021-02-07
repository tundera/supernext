import type { FC } from 'react'

import { Flex, useColorModeValue, Icon } from '@chakra-ui/react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import PageButton from '@components/utility/PageButton'

const Pagination: FC = () => {
  return (
    <Flex bg="whiteAlpha.700" p={50} w="full" alignItems="center" justifyContent="center">
      <Flex>
        <PageButton>
          <Icon as={IoIosArrowBack} color={useColorModeValue('gray.700', 'gray.200')} boxSize={4} />
        </PageButton>
        <PageButton p>1</PageButton>
        <PageButton p active>
          2
        </PageButton>
        <PageButton p>3</PageButton>
        <PageButton p>4</PageButton>
        <PageButton p>5</PageButton>
        <PageButton>
          <Icon as={IoIosArrowForward} color={useColorModeValue('gray.700', 'gray.200')} boxSize={4} />
        </PageButton>
      </Flex>
    </Flex>
  )
}

export default Pagination
