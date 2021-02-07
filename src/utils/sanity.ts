import { createImageUrlBuilder } from 'next-sanity'

import { config } from '@lib/sanity'

export const createImageUrl = (source: string) => createImageUrlBuilder(config).image(source).crop('center')
