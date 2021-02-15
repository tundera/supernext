#!/usr/bin/env ts-node-script

import fs from 'fs'

import globby from 'globby'
import prettier from 'prettier'

const generateSitemap = async () => {
  const prettierConfig = await prettier.resolveConfig('./prettier.config.js')
  const pages = await globby(['pages/*.js', 'content/**/*.mdx', '!pages/_*.tsx', '!pages/api'])

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page.replace('pages', '').replace('content', '').replace('.tsx', '').replace('.mdx', '')
                const route = path === '/index' ? '' : path
                return `
                        <url>
                            <loc>${`https://tundera.dev${route}`}</loc>
                        </url>
                    `
              })
              .join('')}
        </urlset>
    `

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  fs.writeFileSync('public/sitemap.xml', formatted)
}

const main = async () => {
  await generateSitemap()
}

main().finally(() => {
  console.log('Successfully generated sitemap ✅')
})
