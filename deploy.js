/*
 * jos.tw
 *
 * https://github.com/jostw/jos.tw
 *
 * Copyright (c) 2015 jos
 * Licensed under the GPLv2 license.
 */

"use strict";

import fs from "fs";
import path from "path";

import { minify } from "html-minifier";
import ghpages from "gh-pages";

const templates = [
    {
        src: "index.html",
        dest: "dist/index.html"
    }, {
        src: "resume.html",
        dest: "dist/resume/index.html"
    }
];

templates.map((template) => {
    let index = fs.readFileSync(template.src).toString();

    index = minify(index, { removeComments: true });

    fs.writeFileSync(template.dest, index);
});

ghpages.publish(path.join(__dirname, "dist"), {
    message: "Deploy to GitHub Pages"
}, () => {
    console.log("GitHub Pages Published.");
});
