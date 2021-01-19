require('dotenv').config()

module.exports = {
  experimental: {
    reactMode: 'concurrent',
  },
  env: { NEXT_DATOCMS_API_TOKEN: process.env.NEXT_DATOCMS_API_TOKEN },
  webpack: (config) => {
    return config
  },
  webpackDevMiddleware: (config) => {
    return config
  },
}
