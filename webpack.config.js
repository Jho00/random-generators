const path = require('path');

module.exports = {
    entry: './index.ts',
    mode: 'development',
    watch: true,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    externals: {
        moment: 'moment'
    }
};