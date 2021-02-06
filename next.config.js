module.exports = {
  reactStrictMode: true,
  future: {
    webpack5: true,
  },
  experimental: {
    reactMode: 'concurrent',
  },
  target: 'experimental-serverless-trace',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
  webpack: (config) => {
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
