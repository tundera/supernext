// client.ts
import { createClient } from 'sanity-codegen'
import { Documents } from 'services/sanity/generated/types'

import { config } from '@lib/sanity'

// This type parameter enables the client to be aware of your generated types
//                            👇👇👇
export default createClient<Documents>({
  ...config,
  fetch,
  useCdn: process.env.NODE_ENV === 'production',
  // (optional) if true, the client will prefer drafts over the published versions
  previewMode: true,
  // (optional) only required if your dataset is private or if you want to use preview mode
  token: process.env.NEXT_SANITY_API_TOKEN,

  // by default sanity-codegen caches responses in memory. this can be disabled if desired
  // disabledCache: true,
  //
  // (optional) enables the usage of `apicdn.sanity.io`. this is recommended
  // if you plan on using this in browsers. don't use this with preview mode
  // see here: https://www.sanity.io/docs/api-cdn
  // useCdn: true,
})
