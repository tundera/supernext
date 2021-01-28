module.exports = {
  experimental: {
    reactMode: 'concurrent',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },
  images: {
    domains: ['res.cloudinary.com', 'cdn.sanity.io'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
      }
    }

    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    })

    return config
  },
  webpackDevMiddleware: (config) => {
    return config
  },
}
