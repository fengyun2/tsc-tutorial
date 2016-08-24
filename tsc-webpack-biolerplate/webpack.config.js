/*
* @Author: fengyun2
* @Date:   2016-08-24 14:02:43
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-08-24 14:06:20
*/

'use strict';

var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
  debug: true,
  // devServer: {
  //     historyApiFallback: true,
  //     hot: true,
  //     inline: true,
  //     progress: true,
  //     contentBase: './src',
  //     lazy: false,
  //     stats: { colors: true, cached: false, cachedAssets: false },
  //     port: 8001
  //   },
    entry: [
      // 'webpack/hot/dev-server',
      // 'webpack-dev-server/client?http://localhost:8001',
      path.resolve(__dirname, 'src/index.ts')
  ],
    output: {
        filename: "./dist/bundle.js",
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.ts$/, loader: "ts-loader" }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    plugins: [
        /*    new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),*/
        // new webpack.HotModuleReplacementPlugin(),
        function() {
            return this.plugin('done', function(stats) {
                var content;
                content = JSON.stringify(stats.toJson().assetsByChunkName, null, 2);
                console.log('版本是：' + JSON.stringify(stats.toJson().hash));
            });
        },
        new OpenBrowserPlugin({ url: 'http://localhost:8001' })
    ],
};
