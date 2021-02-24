import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import { gql } from 'graphql-request'

import { graphCmsClient } from '@lib/graphcms/client'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.body

  // fetch product from GraphCMS
  const { product } = await graphCmsClient.request(
    gql`
      query ProductPageQuery($slug: String!) {
        product(where: { slug: $slug }) {
          name
          slug
          price
        }
      }
    `,
    {
      slug: slug,
    },
  )

  try {
    const session = await stripe.checkout.sessions.create({
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/store/success?id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/store/products/${slug}`,
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            unit_amount: product.price,
            currency: 'USD',
            product_data: {
              name: product.name,
              metadata: {
                productSlug: slug,
              },
            },
          },
          quantity: 1,
        },
      ],
    })
    res.json(session)

    return
  } catch (e) {
    res.json({ error: { message: e } })
    return
  }
}
