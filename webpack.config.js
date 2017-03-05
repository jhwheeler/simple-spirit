const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'index.bundle.js'
    },
    module: {
        rules: [
            {
              test: /(.js$|.jsx$)/,
              exclude: /(node_modules|bower_components)/,
              use:
                { loader: 'babel-loader' }
            }
          ]
    }
};
