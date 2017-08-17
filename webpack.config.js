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
                use: require('./config/css.config.js')
            },

            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: require('./config/javascript.config.js')
            },

            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: require('./config/image.config.js')
            }
        ]
    },

    plugins: require('./config/plugins.config.js'),

    devServer: require('./config/server.config.js')
};