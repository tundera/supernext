import type { FC } from 'react'

// import NextLink from 'next/link'

import { useColorModeValue, Input } from '@chakra-ui/react'

interface Props {
  handleChange: any
}

const CountrySearch: FC<Props> = ({ handleChange }) => {
  const bg = useColorModeValue('gray.800', 'white')
  const color = useColorModeValue('white', 'gray.800')

  return <Input bg={bg} color={color} onChange={handleChange} placeholder="Search for a country" type="search" />
}

export default CountrySearch

export type { Props as CountrySearchProps }
