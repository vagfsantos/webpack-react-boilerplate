const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/assets/js')
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: require('./css.config.js')
            },

            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: require('./javascript.config.js')
            },
        ]
    },

    devServer: require('./server.config.js')
};