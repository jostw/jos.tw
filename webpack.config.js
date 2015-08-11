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
var autoprefixer = require("autoprefixer-core");

var config = require(path.resolve(__dirname, "config"));

module.exports = {
    entry: {
        script: path.resolve(__dirname, "js/app.js")
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css!postcss"
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel"
            }
        ]
    },

    postcss: function() {
        return [autoprefixer];
    },

    devServer: {
        port: config.port.webpack
    },

    output: {
        path: path.resolve(__dirname, "js"),
        publicPath: "http://localhost:" + config.port.webpack + "/js/",

        filename: "[name].js"
    }
};
