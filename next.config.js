module.exports = {
  experimental: {
    reactMode: 'concurrent',
  },
  images: {
    domains: ['res.cloudinary.com', 'cdn.sanity.io'],
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
