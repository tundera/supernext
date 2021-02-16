import type { NextApiRequest, NextApiResponse } from 'next'

import Stripe from 'stripe'
import { gql } from 'graphql-request'

import { graphCmsMutationClient } from '@lib/graphcms/client'

interface Price extends Stripe.Price {
  product: Stripe.Product
}

interface LineItem extends Stripe.LineItem {
  price: Price
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const event = req.body

  const session = await stripe.checkout.sessions.retrieve(event.data.object.id, {
    expand: ['line_items.data.price.product', 'customer'],
  })
  const line_items = session.line_items.data as LineItem[]
  const customer = session.customer as Stripe.Customer

  console.log(line_items)

  const orderItems = line_items.map((li) => ({
    quantity: li.quantity,
    total: li.amount_total,
    product: {
      connect: {
        slug: li.price.product.metadata.productSlug,
      },
    },
  }))

  console.log(orderItems)

  // create order and order items in GraphCMS
  const { order } = await graphCmsMutationClient.request(
    gql`
      mutation CreateOrderMutation($data: OrderCreateInput!) {
        createOrder(data: $data) {
          id
          emailAddress
          total
        }
      }
    `,
    {
      data: {
        emailAddress: customer.email,
        total: session.amount_total,
        stripeCheckoutId: session.id,
        orderItems: {
          create: orderItems,
        },
      },
    },
  )

  console.log(order)

  res.json({ message: 'success' })
}
