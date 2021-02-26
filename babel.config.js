module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    'babel-plugin-parameter-decorator',
    'superjson-next',
    'babel-plugin-macros',
  ],
}
