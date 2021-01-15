import { request } from '@lib/datocms'

import PageSeoQuery from '@graphql/datocms/queries/PageSeo'

export async function getPageSeo(): Promise<any> {
  const options = { query: PageSeoQuery }
  const { site, blogPost } = await request({ ...options })

  return { site, blogPost }
}
