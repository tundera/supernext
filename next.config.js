module.exports = {
  experimental: {
    reactMode: 'concurrent',
  },
  // future: {
  //   webpack5: true,
  // },
  target: 'experimental-serverless-trace',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },
  images: {
    // loader: 'cloudinary',
    // path: 'https://res.cloudinary.com/dbc3x3s7c/image/upload/',
    domains: ['cdn.sanity.io'],
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
