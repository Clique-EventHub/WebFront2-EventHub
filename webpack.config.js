module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    https: {
      key: fs.readFileSync("/etc/letsencrypt/live/www.cueventhub.com/privkey.pem"),
      cert: fs.readFileSync("/etc/letsencrypt/live/www.cueventhub.com/fullchain.pem"),
      ca: fs.readFileSync("/etc/letsencrypt/live/www.cueventhub.com/chain.pem"),
    }
  }
};
