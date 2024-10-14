const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: "eval-source-map",
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'Webpack 5 Video Tutorials',
            filename: 'index.html',
            inject: 'body',
        })
    ],
    module: {
        rules: [ 
            { //To import css
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            { //To import images
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            { //To import fonts
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
};