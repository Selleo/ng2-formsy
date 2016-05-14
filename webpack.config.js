var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var ENV = process.env.npm_lifecycle_event;
var isTest = /test/.test(ENV);
var isProd = /dist/.test(ENV);

module.exports = function makeWebpackConfig() {
  var config = {};

  /**
   * Devtool
   * Reference: http://webpack.github.io/docs/configuration.html#devtool
   * Type of sourcemap to use per build type
   */
  if (isTest) {
    config.devtool = 'inline-source-map';
  } else if (isProd) {
    config.devtool = 'source-map';
  } else {
    config.devtool = 'eval-source-map';
  }

  /**
   * Entry
   * Reference: http://webpack.github.io/docs/configuration.html#entry
   */
  config.entry = [
    './src/demo-app/polyfills.ts',
    './src/demo-app/boot.ts'
  ];

  /**
   * Output
   * Reference: http://webpack.github.io/docs/configuration.html#output
   */
  config.output = isTest ? {} : {
    path: path.resolve('./dist'),
    filename: 'bundle.js'
  };

  /**
   * Resolve
   * Reference: http://webpack.github.io/docs/configuration.html#resolve
   */
  config.resolve = {
    cache: !isTest,
    root: [
      './node_modules',
      './src/demo-app'
    ],
    // only discover files that have those extensions
    extensions: ['', '.ts', '.js', '.json', '.css', '.scss', '.html']
  };

  /**
   * Loaders
   * Reference: http://webpack.github.io/docs/configuration.html#module-loaders
   * List: http://webpack.github.io/docs/list-of-loaders.html
   * This handles most of the magic responsible for converting modules
   */
  config.module = {
    preLoaders: isTest ? [] : [{test: /\.ts$/, loader: 'tslint'}],
    loaders: [
      // Support for .ts files.
      {
        test: /\.ts$/,
        loader: 'ts',
        exclude: /node_modules/
      },

      // support for .scss files
      {
        test: /\.scss$/,
        loader: 'style!css!postcss!sass'
      },

      // Support for .css files
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
      },

      // support for .html as raw text
      {
        test: /\.html$/,
        loader: 'raw'
      },

      // copy those assets to output
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=fonts/[name].[hash].[ext]?'
      }
    ],
    postLoaders: [],
    noParse: [/.+zone\.js\/dist\/.+/, /.+angular2\/bundles\/.+/, /angular2-polyfills\.js/]
  };

  /**
   * Plugins
   * Reference: http://webpack.github.io/docs/configuration.html#plugins
   * List: http://webpack.github.io/docs/list-of-plugins.html
   */
  config.plugins = [
    // Define env variables to help with builds
    // Reference: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
    new webpack.DefinePlugin({
      // Environment helpers
      'process.env': {
        ENV: JSON.stringify(ENV)
      }
    })
  ];

  // Add build specific plugins
  if (isProd) {
    config.plugins.push(
      // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
      // Only emit files when there are no errors
      new webpack.NoErrorsPlugin(),

      // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
      // Dedupe modules in the output
      new webpack.optimize.DedupePlugin(),

      // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
      // Minify all javascript, switch loaders to minimizing mode
      new webpack.optimize.UglifyJsPlugin({
        // Angular 2 is broken again, disabling mangle until beta 6 that should fix the thing
        mangle: true
      })
    );
  }

  // Add build specific plugins
  if (isProd) {
    config.plugins.push(
      // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
      // Only emit files when there are no errors
      new webpack.NoErrorsPlugin(),

      // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
      // Dedupe modules in the output
      new webpack.optimize.DedupePlugin(),

      // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
      // Minify all javascript, switch loaders to minimizing mode
      new webpack.optimize.UglifyJsPlugin({
        // Angular 2 is broken again, disabling mangle until beta 6 that should fix the thing
        mangle: false
      }),

      // Copy assets from the public folder
      // Reference: https://github.com/kevlened/copy-webpack-plugin
      new CopyWebpackPlugin([{
        from: path.resolve('./src/demo-app')
      }])
    );
  }

  /**
   * PostCSS
   * Reference: https://github.com/postcss/autoprefixer-core
   * Add vendor prefixes to your css
   */
  config.postcss = [
    autoprefixer({
      browsers: ['last 2 version', '> 1%', 'IE > 8']
    })
  ];

  /**
   * Apply the tslint loader as pre/postLoader
   * Reference: https://github.com/wbuchwalter/tslint-loader
   */
  config.tslint = {
    emitErrors: false,
    failOnHint: false
  };

  /**
   * Dev server configuration
   * Reference: http://webpack.github.io/docs/configuration.html#devserver
   * Reference: http://webpack.github.io/docs/webpack-dev-server.html
   */
  config.devServer = {
    contentBase: './src/demo-app',
    historyApiFallback: true,
    port: 3000,
    stats: 'minimal'
  };

  return config;
}();
