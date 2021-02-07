import type { GetServerSideProps } from 'next'

import { paramCase } from 'change-case'
import { Flex, Heading, List, ListItem, SimpleGrid, Text } from '@chakra-ui/react'
import { loadStripe } from '@stripe/stripe-js'
import Stripe from 'stripe'
import { createCheckoutSession } from 'next-stripe/client'

import PageLayout from '@components/layouts/PageLayout'
import ProductCard from '@components/ui/cards/products/ProductCard'

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

const StorePage = ({ prices }: Props) => {
  const products = []
  return (
    <>
      <PageLayout>
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
      </PageLayout>
    </>
  )
}

export default StorePage

function ProductsGrid({ products }) {
  return (
    <SimpleGrid minChildWidth="250px" spacing="40px">
      {products.map(({ name, description, price, image }) => (
        <ProductCard key={paramCase(name)} name={name} description={description} price={price} image={image} />
      ))}
    </SimpleGrid>
  )
}
