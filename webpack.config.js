const path = require('path')

const HtmlWebPackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebPackPlugin({
  template: './ui/public/index.html',
  filename: 'index.html',
})

const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: 'css/[name].[contenthash].css',
})

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const cleanPlugin = new CleanWebpackPlugin()

module.exports = (env, argv) => ({
  entry: {
    app: [
      './ui/src/index.tsx',
    ],
  },
  devtool: argv.mode === 'development' ? 'cheap-module-eval-source-map' : false,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        include: [
          path.resolve(__dirname, 'ui/src'),
        ],
        exclude: [
          /node_modules/,
        ],
        options: {
          typeCheck: true,
          emitErrors: true,
        },
      },
      {
        test: /\.tsx?$/,
        include: [
          path.resolve(__dirname, 'ui/src'),
        ],
        exclude: [
          /node_modules/,
        ],
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader?modules=true',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jp(e?)g|gif|svg|ico|pdf)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: 'img/[name].[contenthash].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.scss', '.sass'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true,
        },
      },
    },
  },
  output: {
    path: path.join(__dirname, 'priv/static/app'),
    publicPath: argv.mode === 'development' ? '' : '/assets/app',
    filename: 'js/[name].[contenthash].js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'priv/static/app'),
    compress: true,
    inline: true,
    port: 9000,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Headers': 'Authorization',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Origin': '*',
    },
    host: 'tttgear.localhost',
    proxy: {
      '/api': {
        target: 'http://tttgear.localhost:8080',
        changeOrigin: true,
      },
      '/assets': {
        target: 'http://tttgear.localhost:8080',
        changeOrigin: true,
      },
      '/ui': {
        bypass: ({ originalUrl }) => {
          if (originalUrl === '/ui/') {
            return '/index.html'
          }
          // For js and css: cut the leading '/ui'
          return originalUrl.slice(3)
        },
      },
    },
  },
  plugins: [
    cleanPlugin,
    miniCssExtractPlugin,
    htmlPlugin,
  ],
})
