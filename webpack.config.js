const path = require('path');

module.exports = {
  // devtool: isProd ? false : 'source-map',
  mode: 'development',
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ]
  },
  devServer: {
    static: path.join(__dirname, './dist'),
    port: 8080,
    open: false
  },
}