const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require("webpack");
//const autoprefixer = require('autoprefixer');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body',
    minify:{   
        removeComments:false,   
        collapseWhitespace:false    
    }
});

var WebpackBootstrapConfig = new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    Popper: ['popper.js', 'default'],
    Util: "exports-loader?Util!bootstrap/js/dist/util",
    Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
    Button: "exports-loader?Button!bootstrap/js/dist/button",
    Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
    Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
    Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
    Index: "exports-loader?Index!bootstrap/js/dist/index",
    Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
    Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
    Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
    Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
    Tooltip: "exports-loader?Tropdown!bootstrap/js/dist/tooltip"
});

module.exports = {
    resolve: {
        extensions: ['.js', '.ts']
    },
    entry: {
        'polyfills': __dirname + '/src/polyfills.ts',
        'vendor': __dirname + '/src/vendor.ts',
        'font-awesome': 'font-awesome-sass-loader!./config/font-awesome.config.js',
        'app': __dirname + '/src/app.ts',
        'style': __dirname + '/src/scss/app.scss'
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // output directory
        filename: "[name].js" // name of the generated bundle
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ["style-loader", "css-loader"]
            },
            {
                test: /\.ts$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.ts$/,
                enforce: "pre",
                loader: 'tslint-loader'
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },

            /*
             * Font loaders, required for font-awesome-sass-loader and bootstrap-loader
             */
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },

            // loader config for angular component styles 
            {   
                test: /\.css$/, 
                exclude: [/node_modules/, /src\/scss/], 
                loader: ["raw-loader", "css-loader?sourceMap"]
            },

            // loader config for global css files
            {
                test: /\.scss$/,
                exclude: [/node_modules/, /src\/app/],
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?sourceMap', 'sass-loader?sourceMap']
                })
            },

            // {
            //     test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            //     use: [{
            //         loader: 'file-loader',
            //         options: {
            //             name: '[name].[ext]',
            //             outputPath: 'fonts/',    // where the fonts will go
            //             publicPath: __dirname + '/'     // override the default path
            //         }
            //     }]
            // },

        ]   
    },
    plugins: [
        HTMLWebpackPluginConfig, 
        WebpackBootstrapConfig,
        new ExtractTextPlugin({
            filename: 'css/[name].css',
            allChunks: true,
        })
    ],
    devtool: "source-map",
    devServer: {
        historyApiFallback: true
    }
};
