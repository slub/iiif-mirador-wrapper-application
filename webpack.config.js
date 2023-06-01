const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const baseConfig = mode => ({
    entry: ['./src/index.js'],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                ],
            },
        ],
    },

    output: {
        filename: 'iiif-mirador-wrapper-application.min.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
    },
    plugins: [
        new webpack.IgnorePlugin({
            resourceRegExp: /@blueprintjs\/(core|icons)/,
        }),
    ],
    resolve: {
        alias: {
            'react/jsx-dev-runtime': 'react/jsx-dev-runtime.js',
            'react/jsx-runtime': 'react/jsx-runtime.js',
        },
        extensions: ['.js'],
    },
});

module.exports = (env, options) => {
    const isProduction = options.mode === 'production';
    const config = baseConfig(options.mode);
    if(isProduction) {
        return {
            ...config,
            devtool: 'source-map',
            mode: 'production',
            plugins: [
                ...(config.plugins || []),
                new webpack.optimize.LimitChunkCountPlugin({
                    maxChunks: 1,
                }),
            ],
        };
    }
    return {
        ...config,
        devServer: {
            hot: true,
            port: 4444,
            static: [
                './demo/src',
            ],
        },
        devtool: 'eval-source-map',
        mode: 'development',
        plugins: [
            ...(config.plugins || []),
            new ReactRefreshWebpackPlugin(),
        ],
    };
};
