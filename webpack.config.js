var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
  'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
  'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
  './src/entry.js'
  ],
  output: {
    path: './bundle',
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/build/'       
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.jsx?$/, 
        exclude: /node_modules/, 
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
      },
      { 
        test: /.css$/,
        exclude: /node_modules/, 
        loader: "style-loader!css-loader?module&localIdentName=[name]-[local]-[hash:base64:10]"
      },
      { 
        test: /.css$/,
        include: /node_modules/, 
        loader: "style-loader!css-loader"
      },
      {
        test: /\.less/,
        exclude: path.resolve(__dirname, 'src/styles'),
        loader: 'style!css?modules&localIdentName=[name]-[local]-[hash:base64:10]!less'
      },
      {
        test: /\.less/,
        include: path.resolve(__dirname, 'src/styles'),
        loader: 'style!css!less'
      },
      { 
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, 
        loader: 'url-loader?limit=50000&name=[path][name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'] 
  },
  plugins: [
   // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin()
  ]
};