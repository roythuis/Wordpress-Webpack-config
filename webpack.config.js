const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: [
        "./src/js/index.js",
        "./src/scss/index.scss"
    ],
    output: {
        path: path.resolve(__dirname),
        filename: 'dist/js/index.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(scss)$/,
                // test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css",
            chunkFilename: "[id].css"
        }),
        // new BrowserSyncPlugin({
        //     // browse to http://localhost:3000/ during development,
        //     // ./public directory is being served
        //     host: 'localhost',
        //     port: 3000,
        //     proxy: 'http://apollo.localhost',
        //     //server: { baseDir: ['public'] }

        //     // prevent BrowserSync from reloading the page
        //     // and let Webpack Dev Server take care of this
        //     reload: false
        // })
    ]
};
