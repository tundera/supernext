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
          '@lib': './src/lib',
          '@styles': './styles',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
      },
    ],
    'next-data-hooks/babel',
  ],
}
