/*
 * jos.tw
 *
 * https://github.com/jostw/jos.tw
 *
 * Copyright (c) 2015 jos
 * Licensed under the GPLv2 license.
 */

"use strict";

var path = require("path");
var webpack = require("webpack");

var config = require(path.resolve(__dirname, "config"));

var isDev = process.argv[1].match("dev");

module.exports = {
    entry: {
        script: (function() {
            var script = path.resolve(__dirname, "js/app.js");

            if (isDev) {
                script = [
                    "webpack-dev-server/client?http://localhost:" + config.port.webpack,
                    "webpack/hot/dev-server",
                    script
                ];
            }

            return script;
        })(),

        vendor: [
            "html5shiv",
            path.resolve(__dirname, "node_modules/respond.js/dest/respond.min.js")
        ]
    },

    resolve: {
        root: [
            path.resolve(__dirname, "bower_components")
        ]
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css!postcss"
            }, {
                test: /\.png$/,
                loader: "file?name=[name].png!image-webpack"
            }, {
                test: /\.js$/,
                exclude: /node_modules|html5shiv|respond|modernizr|plugins/,
                loader: "babel"
            }, {
                test: /respond|modernizr/,
                loader: "imports?this=>window"
            }
        ]
    },

    postcss: function() {
        return [
            require("postcss-import"),
            require("postcss-mixins"),
            require("postcss-nested"),
            require("postcss-simple-vars"),
            require("postcss-calc"),
            require("autoprefixer-core")
        ];
    },

    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["_originalSource"])
        )
    ],

    devServer: {
        port: config.port.webpack
    },

    output: {
        path: path.resolve(__dirname, "assets"),
        publicPath: "http://localhost:" + config.port.webpack + "/assets/",

        filename: "[name].js"
    }
};
