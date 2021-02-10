import { SimpleGrid } from '@chakra-ui/react'
import { paramCase } from 'change-case'

import ProductCard from '@components/ui/cards/products/ProductCard'

function ProductsGrid({ products }) {
  return (
    <SimpleGrid minChildWidth="250px" spacing="40px">
      {products.map(({ name, description, price, image }) => (
        <ProductCard key={paramCase(name)} name={name} description={description} price={price} image={image} />
      ))}
    </SimpleGrid>
  )
}

export default ProductsGrid
