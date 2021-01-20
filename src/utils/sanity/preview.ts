import { createPreviewSubscriptionHook } from 'next-sanity'

const options = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  useCdn: process.env.NODE_ENV === 'production',
}

export const usePreviewSubscription = createPreviewSubscriptionHook(options)
