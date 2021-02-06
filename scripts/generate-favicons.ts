#!/usr/bin/env ts-node-script

import fs from 'fs'
import path from 'path'
import favicons from 'favicons'

import siteConfig from '../site-config'

const generateFavicons = async () => {
  return new Promise<void>((resolve, reject) => {
    favicons(
      path.resolve(process.cwd(), 'assets', 'images', 'tundera-logo.png'),
      {
        path: '/',
        appName: siteConfig.title,
        appShortName: siteConfig.title,
        appDescription: siteConfig.description,
        developerName: siteConfig.title,
        developerURL: siteConfig.url,
        background: siteConfig.themeColor,
        theme_color: siteConfig.themeColor,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: false,
          windows: true,
          yandex: false,
        },
        logging: true,
      },
      async (error, { files, images }) => {
        if (error) {
          return reject(error)
        }

        await Promise.all(
          [...images, ...files].map(async ({ name, contents }) => {
            fs.writeFile(path.resolve(process.cwd(), 'public/static/favicons', name), contents, reject)
          }),
        )

        return resolve()
      },
    )
  })
}

const main = async () => {
  await generateFavicons()
}

main().finally(() => {
  console.log('Successfully generated favicons ✅')
})
