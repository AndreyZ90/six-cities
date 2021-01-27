const path = require(`path`);

const publicPath = path.resolve(__dirname, `public`);

module.exports = {
  mode: `development`,
  entry: `./src/index.js`,
  output: {
    path: publicPath,
    filename: `bundle.js`
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: `babel-loader`
      }
    ]
  },
  devtool: `source-map`,
  devServer: {
    contentBase: publicPath,
    port: 8080,
    open: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, `src`)
    },
    extensions: [`.jsx`, `.js`, `.json`]
  }
}
