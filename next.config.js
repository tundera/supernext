/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      require('remark-slug'),
      require('remark-code-titles'),
      require('remark-toc'),
      require('remark-external-links'),
    ],
    rehypePlugins: [require('rehype-autolink-headings'), require('mdx-prism')],
  },
})

const plugins = [withMDX]

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/metrics',
        destination: 'https://metrics.tundera.dev',
        permanent: true,
      },
    ]
  },
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
    locales: ['en', 'de'],
  },
  images: {
    domains: [
      'media.graphcms.com', // GraphCMS content
      'files.stripe.com', // Stripe images
      'upload.wikimedia.org', // Wikipedia images
      'i.scdn.co', // Spotify now playing
      'pbs.twimg.com', // Twitter profile
    ],
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        module: false,
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
}

module.exports = withPlugins([...plugins], nextConfig)
