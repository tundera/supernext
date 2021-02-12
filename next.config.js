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
    locales: ['en', 'es-419'],
  },
  images: {
    domains: ['cdn.sanity.io', 'files.stripe.com'],
  },
  webpack: (config) => {
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
