/* eslint-disable jsx-a11y/anchor-is-valid */
import type { GetStaticProps } from 'next'
import type { CustomNextPage as NextPage } from 'types'

import NextLink from 'next/link'
import Image from 'next/image'

import { getLayout } from '@components/layouts/SiteLayout'
import ProductCard from '@components/ui/cards/products/ProductCard'
import { formatCurrencyValue } from '@lib/graphcms/helpers'
import { graphCmsClient } from '@lib/graphcms/client'

import { Grid, Flex, GridItem, Text, Heading, Box, LinkBox, LinkOverlay } from '@chakra-ui/react'

interface Props {
  products: any
}

export const getStaticProps: GetStaticProps = async () => {
  const { products } = await graphCmsClient.request(
    `
      {
        products {
          id
          images {
            id
            height
            url
            width
          }
          name
          price
          slug
        }
      }
    `,
  )

  return {
    props: {
      products: products.map((product) => ({
        ...product,
        formattedPrice: formatCurrencyValue({ value: product.price }),
      })),
    },
  }
}

const StorePage: NextPage<Props> = ({ products }) => {
  return (
    <>
      <Flex flexDir="column" alignItems="center">
        <Box borderBottom="1px" py="4" my="2">
          <Heading as="h1" fontWeight="semibold" size="3xl">
            Products
          </Heading>
          <Text color="gray.500" size="sm">
            Latest products available to buy!
          </Text>
        </Box>
        <Grid
          borderBottomWidth={{ base: '1px', md: '0' }}
          borderTopWidth={{ base: '1px', md: '0' }}
          borderLeftWidth={{ md: '1px' }}
          borderRightWidth={{ md: '1px' }}
          templateColumns={{ md: '3' }}
        >
          {products.map((product) => {
            const [primaryImage] = product.images

            return (
              <GridItem key={product.id}>
                <LinkBox as="article" display="block" px="8" py="6" my="4" _groupHover={{ bg: 'gray.100' }}>
                  <NextLink href={`/store/products/${product.slug}`}>
                    <LinkOverlay>
                      <ProductCard
                        name={product.name}
                        description={product.description}
                        price={product.formattedPrice}
                        imageUrl={primaryImage.url}
                      />
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </GridItem>
            )
          })}
        </Grid>
      </Flex>
    </>
  )
}

StorePage.getLayout = getLayout

export default StorePage

export type { Props as StorePageProps }
