var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  devtool: 'eval',
  context: __dirname,

  entry: {
    main: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './client/index',
    ]
  },

  output: {
      path: path.resolve('./static/'),
      filename: "[name].js",
      publicPath: 'http://localhost:3000/assets/bundles/', // tell django to use this URL to load packages and not use STATIC_URL + bundle_name
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(), // don't reload if there is an error
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

  module: {
    loaders: [{
      test: /\.(ttf|eot|otf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file-loader"
    },{
      test: /\.css/,
      loader: "style!css!autoprefixer?browsers=last 10 versions"
    },{
      test: /\.scss/,
      loader: "style!css!autoprefixer?browsers=last 10 versions!sass?sourceMap"
    },{
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url-loader?limit=464600&mimetype=application/font-woff",
    },{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    }]
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  },
}
