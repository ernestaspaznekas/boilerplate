const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
      app: './src/index.js',
      print: './src/print.js'
  },
  plugins:[
      new HtmlWebpackPlugin({
          // And any other config options from html-webpack-plugin:
          // https://github.com/ampedandwired/html-webpack-plugin#configuration
          title: 'Output Management'
      })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}