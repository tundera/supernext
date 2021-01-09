module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@providers': './src/providers',
          '@layouts': './src/layouts',
          '@pages': './src/pages',
          '@styles': './src/styles',
          '@utils': './src/utils',
          '@lib': './src/lib',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
      },
    ],
  ],
}
