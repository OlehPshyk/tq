// const glob = require('glob');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// const generateHTMLPlugins = () => glob.sync('./src/**/*.html').map(
//   dir => new HTMLWebpackPlugin({
//     filename: path.basename(dir), // Output
//     template: dir, // Input
//     inject: false,
//   }),
// );
module.exports = {
  node: {
    fs: 'empty',
  },
  entry: 
  // {
  //   app: './src/js/app.js',
  //   videoVimeo: './src/js/videovimeo.js',
  //   styles: './src/style/main.scss',
  // },
    ['./src/js/app.js', './src/style/main.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    // filename: '[name].js',
  },  
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // options: {
        //   cacheCompression: false,
        //   compact: false,
        // }       
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
      },
      {
        test: /\.(pdf|gif|png|jpe?g|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'static/img/',
            },
          },
        ],
      },      
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {              
              outputPath: 'static/fonts/',
            },
          }
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './src/static/',
        to: './static/',
      },
    ]),
    // new webpack.ProvidePlugin({        
    //   '$': 'jquery',
    //   'jQuery': 'jquery',
    //   'window.jQuery': 'jquery',
    //   'window.$': 'jquery',            
    //   Popper: ['popper.js', 'default']
    // }),
    // ...generateHTMLPlugins(),    
  ],
  stats: {
    colors: true,
  },
  devtool: 'source-map',
  externals: {
    jquery: 'jQuery'
  }
};
