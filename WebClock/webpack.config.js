const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry: target modul yang akan dianalisa
  entry: "./src/index.js",

  // Output: hasil dari file-file yang sudah di bundle
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },

  // Mode: 
  mode: "production",
  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },

  // loaders  sebuah transformation tools pada Webpack yang akan memproses setiap berkas selain JavaScript atau JSON
  module: {
    rules: [
      // css loader
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      },
      // babel loader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      }
    ]
  },

  plugins: [
    /* HTML Webpack Plugin */
    new HtmlWebpackPlugin({
      template: './src/template.html',
      filename: 'index.html',
    }),
  ],
}