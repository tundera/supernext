import type { GetServerSideProps } from 'next'
import type { CustomNextPage as NextPage } from 'types'

import { Flex, Heading, List, ListItem, Text } from '@chakra-ui/react'
import { loadStripe } from '@stripe/stripe-js'
import Stripe from 'stripe'
import { createCheckoutSession } from 'next-stripe/client'
import ProductsGrid from '@components/ui/grids/ProductsGrid'

import { getLayout } from '@components/layouts/SiteLayout'

interface Price extends Stripe.Price {
  product: Stripe.Product
}

type Props = {
  prices: Price[]
}

export const getServerSideProps: GetServerSideProps = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2020-08-27',
  })

  const prices = await stripe.prices.list({
    active: true,
    limit: 10,
    expand: ['data.product'],
  })

  return {
    props: { prices: prices.data },
  }
}

const StorePage: NextPage<Props> = ({ prices }: Props) => {
  const products = []
  return (
    <>
      <Flex flexDir="column" alignItems="center">
        <Heading as="h1" size="4xl" py={8} mb="20px" textAlign="center">
          Store
        </Heading>
        <List spacing={3} align="center">
          {prices.map((price) => (
            <ListItem key={price.id}>
              <Heading as="h2">{price.product.name}</Heading>
              <img src={price.product.images[0]} alt={price.product.name} />
              <Text>Cost: ${((price.unit_amount as number) / 100).toFixed(2)}</Text>
            </ListItem>
          ))}
        </List>
        <ProductsGrid products={products} />
      </Flex>
    </>
  )
}

StorePage.getLayout = getLayout

export default StorePage

export type { Props as StorePageProps }
