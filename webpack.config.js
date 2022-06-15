const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/init.js',
    devServer: {
        static: {
            directory: path.join(__dirname, "static"),
        },
        watchFiles: ["src"],
        compress: true,
        port: 3000,
        hot: true
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({template: "src/index.html"}),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                  }
                }
            }
        ]
    }
};