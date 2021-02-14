/* eslint-disable @typescript-eslint/no-var-requires */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      require('remark-slug'),
      require('remark-code-titles'),
      require('remark-toc'),
      require('remark-external-links'),
    ],
    rehypePlugins: [require('rehype-autolink-headings')],
  },
})

module.exports = withMDX({
  reactStrictMode: true,
  future: {
    webpack5: true,
  },
  experimental: {
    reactMode: 'concurrent',
  },
  target: 'experimental-serverless-trace',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
  images: {
    domains: ['cdn.sanity.io', 'files.stripe.com'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      }
    }

    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  webpackDevMiddleware: (config) => {
    return config
  },
})
