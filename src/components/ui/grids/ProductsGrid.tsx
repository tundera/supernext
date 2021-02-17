import type { FC } from 'react'

import { SimpleGrid } from '@chakra-ui/react'
import { paramCase } from 'change-case'
import Stripe from 'stripe'

import ProductCard from '@components/ui/cards/products/ProductCard'

interface Price extends Stripe.Price {
  product: Stripe.Product
}

interface Props {
  prices: Price[]
}

const ProductsGrid: FC<Props> = ({ prices }) => {
  return (
    <SimpleGrid minChildWidth="250px" spacing="40px">
      {prices.map((price) => (
        <ProductCard
          key={paramCase(price.product.id)}
          name={price.product.name}
          description={price.product.description}
          price={price.unit_amount}
          imageUrl={price.product.images[0]}
        />
      ))}
    </SimpleGrid>
  )
}

export default ProductsGrid
