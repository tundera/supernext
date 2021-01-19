import type { SanityPage } from 'types/sanity'
import { AllPagesDocument, PageBySlugDocument, PageBySlugQueryVariables } from 'generated/sanity'

import { getSanityContent } from '@utils/sanity'

export async function getAllPages(): Promise<SanityPage[]> {
  const { allPage: data } = await getSanityContent({
    query: AllPagesDocument,
  })

  return data
}

export async function getPageBySlug({ slug }: PageBySlugQueryVariables) {
  const { allPage: data } = await getSanityContent({ query: PageBySlugDocument, variables: { slug } })

  return data
}
