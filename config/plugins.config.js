const path = require('path');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = [
    new CopyWebpackPlugin([
        {
            from: './src/images/',
            to: path.resolve(__dirname, 'public/assets/images')
        },
        {
            from: './src/index.html',
            to: path.resolve(__dirname, 'public/')
        }
    ]),

    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
];