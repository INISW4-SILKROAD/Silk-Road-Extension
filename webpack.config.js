// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: {
//     popup: './src/popup/index.js',
//     background: './background.js',
//     content: './content.js',
//   },
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: '[name].bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             outputPath: 'fonts',
//           }
//         },
//       },
//       {
//         test: /\.css$/i,
//         use: ['style-loader', 'css-loader'],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './public/index.html',
//       filename: 'index.html',
//       chunks: ['popup'],
//     }),
//   ],
//   resolve: {
//     extensions: ['.js', '.jsx', '.css'],
//   },
//   devServer: {
//     static: {
//       directory: path.join(__dirname, 'public'),
//     },
//     compress: true,
//     port: 9000,
//     hot: true,
//     devMiddleware: {
//       writeToDisk: true,
//     },
//   },
//   devtool: 'source-map', // 'eval-source-map'이 아닌 'source-map' 사용
// };


// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: {
//     popup: './src/popup/index.js',
//     background: './background.js',
//     content: './content.js',
//   },
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: '[name].bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react']
//           }
//         },
//       },
//       {
//         test: /\.css$/i,
//         use: ['style-loader', 'css-loader'],
//       },
//       {
//         test: /\.(woff|woff2|eot|ttf|otf)$/i,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {
//               outputPath: 'fonts',
//               name: '[name].[ext]',
//             },
//           },
//         ],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './public/index.html',
//       filename: 'index.html',
//       chunks: ['popup'],
//     }),
//   ],
//   resolve: {
//     extensions: ['.js', '.jsx', '.css'],
//   },
//   devServer: {
//     static: {
//       directory: path.join(__dirname, 'public'),
//     },
//     compress: true,
//     port: 9000,
//     hot: true,
//     devMiddleware: {
//       writeToDisk: true,
//     },
//   },
//   devtool: 'source-map',
// };


const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    popup: './src/popup/index.js',
    background: './background.js',
    content: './content.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      chunks: ['popup'],
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
    hot: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },
  devtool: 'source-map',
};
