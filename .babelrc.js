module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@routes': './src/routes',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@providers': './src/providers',
          '@suspense': './src/suspense',
          '@layouts': './src/layouts',
          '@styles': './src/styles',
          '@graphql': './src/graphql',
          '@utils': './src/utils',
          '@lib': './src/lib',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
      },
    ],
    'next-data-hooks/babel',
  ],
}
