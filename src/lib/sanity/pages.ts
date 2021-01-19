import type { SanityPage } from 'types/sanity'

import { getSanityContent } from '@utils/sanity'
import AllPagesQuery from '@graphql/sanity/queries/AllPages'

export async function getAllPages(): Promise<SanityPage[]> {
  const { allPage: data } = await getSanityContent({
    query: AllPagesQuery,
  })

  return data
}
