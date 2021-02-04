module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    'babel-plugin-parameter-decorator',
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
    'superjson-next',
  ],
}
