const mock = require('./src/index.js')
module.exports = {
  pages: {
    index: {
      entry: 'example/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
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
