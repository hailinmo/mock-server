const htmlWebpackPlugin = require('html-webpack-plugin')
const mock = require('./src/index.js')
const path = require('path')
module.exports = {
  mode: 'development',
  entry: './examples/index.js',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  stats: {
    assets: false,
    builtAt: false,
    modules: false,
    entrypoints: false
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
      inject: 'head',
    }),
  ],
  devServer: {
    port: 9528,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      '/mockjs/': {
        target: 'http://localhost:8080/',
        changeOrigin: true,
      },
    },
    before: mock.mockServer,
  },
}
