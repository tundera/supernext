#!/usr/bin/env ts-node-script

import { promises as fs } from 'fs'
import path from 'path'
import RSS from 'rss'
import matter from 'gray-matter'

const generateRssFeed = async () => {
  const feed = new RSS({
    title: 'Philip Johnston',
    site_url: 'https://tundera.dev',
    feed_url: 'https://tundera.dev/feed.xml',
  })

  const posts = await fs.readdir(path.join(__dirname, '..', 'content', 'articles'))

  await Promise.all(
    posts.map(async (name) => {
      const content = await fs.readFile(path.join(__dirname, '..', 'content', 'articles', name))
      const frontmatter = matter(content)

      feed.item({
        title: frontmatter.data.title,
        url: 'https://tundera.dev/articles/' + name.replace(/\.mdx?/, ''),
        date: frontmatter.data.date,
        description: frontmatter.data.description,
      })
    }),
  )

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

const main = async () => {
  await generateRssFeed()
}

main().finally(() => {
  console.log('Successfully generated RSS feed ✅')
})
