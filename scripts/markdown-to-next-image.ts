#!/usr/bin/env ts-node-script

import { promisify } from 'util'
import { resolve } from 'path'
import fs from 'fs'
import unified from 'unified'
import markdown from 'remark-parse'
import md from 'remark-stringify'
import frontmatter from 'remark-frontmatter'
import prettier from 'prettier'

import imgToJsx from './img-to-jsx'

const readdir = promisify(fs.readdir)
const stat = promisify(fs.stat)

async function getFiles(dir) {
  const subdirs = await readdir(dir)
  const files = await Promise.all(
    subdirs.map(async (subdir) => {
      const res = resolve(dir, subdir)
      return (await stat(res)).isDirectory() ? getFiles(res) : res
    }),
  )
  return files.reduce((a, f) => a.concat(f), [])
}

async function getImageSizes(dir) {
  const files = await getFiles(dir)
  const prettierConfig = await prettier.resolveConfig('./prettier.config.js')

  console.log(files)

  files.map((filePath) => {
    const contents = unified()
      .use(markdown)
      .use(imgToJsx, {})
      .use(md)
      .use(frontmatter, ['yaml'])
      .processSync(fs.readFileSync(filePath))
      .toString()

    const outputDir = `${process.cwd()}/${dir}`

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir)
    }

    const slug = filePath.split(dir)[1]

    const formatted = prettier.format(contents, {
      ...prettierConfig,
      parser: 'markdown',
    })

    fs.writeFileSync(`${outputDir}/${slug}`, formatted)
  })
}

getImageSizes('content/blog')
  .then(() => console.log('Done!'))
  .catch((e) => console.error(e))

const main = async () => {
  try {
    await getImageSizes('content/blog')
  } catch (err) {
    console.error(err)
  } finally {
    console.log('Successfully coverted markdown images to Next Image components ✅')
  }
}

main()
