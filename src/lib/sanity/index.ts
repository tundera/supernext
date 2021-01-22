import type { SanityContentOptions } from 'types/sanity'

import { createClient, createPortableTextComponent, createPreviewSubscriptionHook } from 'next-sanity'

import { request } from 'graphql-request'

const endpoint = `${process.env.NEXT_PUBLIC_SANITY_GRAPHQL_ENDPOINT}`

export const getSanityContent = async ({ query, variables = {} }: SanityContentOptions) => {
  const data = await request(endpoint, query, variables)
  return data
}

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  useCdn: process.env.NODE_ENV === 'production',
}

export const sanityClient = createClient(config)

export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.NEXT_SANITY_API_TOKEN || '',
})

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview: boolean = false) => (usePreview ? previewClient : sanityClient)

export const usePreviewSubscription = createPreviewSubscriptionHook(config)

export const PortableText = createPortableTextComponent({
  ...config,
  serializers: {},
})
