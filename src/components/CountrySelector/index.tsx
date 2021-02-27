import type { FC } from 'react'

// import NextLink from 'next/link'

import { useColorModeValue, Heading, Text, Box, Flex, Select } from '@chakra-ui/react'
import styled from '@emotion/styled'

interface Props {
  stats: any[]
  handleChange: any
}

const Selector = styled(Select)`
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  cursor: default;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  min-height: 38px;
  position: relative;
  box-sizing: border-box;
  border-color: rgb(204, 204, 204);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  transition: all 100ms ease 0s;
  outline: 0px !important;
  font-size: 15px;
  margin-bottom: 10px;
`

const CountrySelector: FC<Props> = ({ stats, handleChange }) => {
  const bg = useColorModeValue('gray.800', 'white')
  const color = useColorModeValue('white', 'gray.800')

  return (
    <Flex as="article" bg={bg} color={color} w="full">
      <div>
        <Selector onChange={handleChange}>
          <option>Select a country</option>
          {stats.map((stat, index) => (
            <option key={`${stat.country}-${index}`}>{stat.country}</option>
          ))}
        </Selector>
      </div>
    </Flex>
  )
}

export default CountrySelector

export type { Props as CountrySelectorProps }
