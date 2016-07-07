module.exports = {
  entry: './src/entry.js',
  output: {
    path: './bundle',
    filename: 'bundle.js'       
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
        loader: 'babel-loader', 
        query: {
          presets: ['es2015', 'react']
        }
      },
      { 
        test: /.css$/, 
        loader: "style-loader!css-loader?module&localIdentName=[name]-[local]-[hash:base64:10]"
      },
      {
        test: /\.less/,
        loader: 'style!css?modules&localIdentName=[name]__[local]!less'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json'] 
  }
};