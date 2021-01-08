module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@components': './src/components',
          '@layouts': './src/layouts',
          '@pages': './src/pages',
          '@styles': './src/styles',
          '@utils': './src/utils',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
      },
    ],
  ],
}
