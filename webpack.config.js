const LiveReloadPlugin = require('webpack-livereload-plugin')
const options = {
}
module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'responsive-loader',
              quality: 85,
              mimetype: 'image/png'
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|woff|ttf)$/,
        use: [{
          loader: 'file-loader'
        }]
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
          options: {}
        }
      }
    ]
  },
  mode: 'development',
  plugins: [
    new LiveReloadPlugin(options)
  ]
}
