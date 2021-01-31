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
    domains: ['res.cloudinary.com', 'cdn.sanity.io'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
        tls: 'empty',
        net: 'empty',
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
