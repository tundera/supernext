import { createPreviewSubscriptionHook, createClient } from 'next-sanity'

const options = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  useCdn: process.env.NODE_ENV === 'production',
}

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(options)
// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...options,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview: boolean = false) => (usePreview ? previewClient : sanityClient)

export const usePreviewSubscription = createPreviewSubscriptionHook(options)
