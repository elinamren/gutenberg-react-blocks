const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const globImporter = require('node-sass-glob-importer');

const path = require('path');

module.exports = {
  entry: {
    script: './src/js/index.js',
    blocks: './src/blocks/blocks.js',
    editor: './src/scss/editor.scss',
    style: './src/scss/style.scss'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    clean: true
  },
  mode: 'production',
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  optimization: {
    minimizer: [
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3011,
      injectCss: true
    }),
    new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: "[id].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules\/(?!(@wordpress)\/)|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            "plugins": [
              [ "@babel/plugin-transform-react-jsx", { "pragma": "wp.element.createElement" } ]
            ]
          }
        }, { loader: 'webpack-import-glob-loader' }]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'resolve-url-loader', options: { keepQuery: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.s[ca]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'resolve-url-loader', options: { keepQuery: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true, sassOptions: {
            importer: globImporter()
          } } }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|jpe?g|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name]-[hash].[ext]'
        }  
      }
    ]
  }
};