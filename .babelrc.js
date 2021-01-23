module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@routes': './src/routes',
          '@common': './src/common',
          '@providers': './src/providers',
          '@utils': './src/utils',
          '@lib': './src/lib',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
      },
    ],
    'next-data-hooks/babel',
  ],
}
