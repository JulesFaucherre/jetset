const path = require( 'path' );
const webpack = require( 'webpack' );

const plugins = [ new webpack.EnvironmentPlugin( 'NODE_ENV' ) ];

const rules = [{
  test: /\.js$/,
  include: [ path.join( __dirname, 'examples' ), path.join( __dirname, 'src' ) ],
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: { cacheDirectory: true } 
  }
}];

const devBuild = {
  entry: { example: path.join( __dirname, 'examples', 'index.js' ) },
  module: { rules },
  plugins,
  output: {
    path: __dirname + '/examples/public',
    filename: '[name].js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: __dirname + '/examples/public',
    historyApiFallback: {
      index: 'index.html'
    }
  }
};

module.exports = devBuild;
