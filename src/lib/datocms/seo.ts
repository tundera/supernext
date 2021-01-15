import { request } from '@lib/datocms'

import PageSeoQuery from '@graphql/datocms/queries/PageSeo'

export async function getPageSeo(): Promise<any> {
  const options = { query: PageSeoQuery }
  const data = await request({ ...options })

  return data
}
