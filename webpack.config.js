var debug = process.env.NODE_ENV !== 'production'
// var webpack = require('webpack')
var path = require('path')

module.exports = {
  devtool: debug ? 'eval-source-map' : 'hidden-source-map',
  entry: './src-blogstate/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'react-mobx-admin-blog.js',
    library: 'react-mobx-admin-blog',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  externals: {
    'axios': 'axios',
    'mobx': 'mobx',
    'mobx-react': 'mobx-react',
    'react': {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM'
    },
    'react-mobx-admin': {
      commonjs: 'react-mobx-admin',
      commonjs2: 'react-mobx-admin',
      amd: 'react-mobx-admin',
      root: 'ReactMobxAdmin'
    }
  }
}
