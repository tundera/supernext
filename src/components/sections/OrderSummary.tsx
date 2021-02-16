import type { FC } from 'react'

import NextLink from 'next/link'
import Image from 'next/image'

import { formatCurrencyValue } from '@lib/graphcms/helpers'
import { useColorModeValue, Box, Flex, Grid, GridItem, Heading, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'

type Order = any

interface Props {
  order: Order
  working: boolean
}

const OrderSummary: FC<Props> = ({ order, working }) => {
  const bg = useColorModeValue('brand.500', 'whiteAlpha.900')
  const color = useColorModeValue('whiteAlpha.900', 'brand.500')

  if (working)
    return (
      <Box py="8" textAlign="center">
        <Text fontWeight="medium" size="xl">
          Retrieving order details
        </Text>
      </Box>
    )

  if (!order)
    return (
      <Box py="8" textAlign="center">
        <Text fontWeight="medium" size="xl">
          Could not locate that order
        </Text>
      </Box>
    )

  return (
    <Box borderTopWidth="1px" borderBottomWidth="1px">
      <Box borderTopWidth="1px" borderBottomWidth="1px">
        {order.orderItems.map((item) => {
          const [productImage] = item.product.images

          return (
            <Grid key={item.id} columnGap="6" templateColumns="10" alignItems="center">
              <GridItem column={{ base: '2', md: '1' }}>
                <Image src={productImage.url} width={productImage.width} height={productImage.height} />
              </GridItem>
              <GridItem column={{ base: '3', md: '4' }}>
                <Text size="xl" color="blue.600">
                  {item.product.name}
                </Text>
              </GridItem>
              <GridItem column="2">
                <Text>{item.quantity}</Text>
              </GridItem>
              <GridItem column="3" textAlign="right">
                <Text fontWeight="semibold" size="lg">
                  {formatCurrencyValue({ value: item.total })}
                </Text>
              </GridItem>
            </Grid>
          )
        })}
      </Box>
      <Flex justify="end" py="4">
        <Text size="2xl">{formatCurrencyValue({ value: order.total })}</Text>
      </Flex>
    </Box>
  )
}

export default OrderSummary

export type { Props as OrderSummaryProps }
