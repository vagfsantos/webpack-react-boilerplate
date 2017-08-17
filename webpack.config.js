const path = require('path');

module.exports = {
    entry: ['./src/index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/assets/js')
    },
    
    devServer: require('./server.config.js'),

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

            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: require('./image.config.js')
            }
        ]
    },

    plugins: require('./plugins.config.js'),
};