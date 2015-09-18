/*
 * jos.tw
 *
 * https://github.com/jostw/jos.tw
 *
 * Copyright (c) 2015 jos
 * Licensed under the GPLv2 license.
 */

"use strict";

module.exports = {
    port: {
        app: 3000,
        webpack: 3001,
        browserSync: 3002
    },

    templates: [
        {
            src: "index.html",
            dest: "dist/index.html"
        }, {
            src: "resume.html",
            dest: "dist/resume/index.html"
        }
    ]
};
