/*
 * jos.tw
 *
 * https://github.com/jostw/jos.tw
 *
 * Copyright (c) 2015 jos
 * Licensed under the GPLv2 license.
 */

"use strict";

import path from "path";
import ghpages from "gh-pages";

ghpages.publish(path.join(__dirname, "dist"), {
    message: "Deploy to GitHub Pages"
}, () => {
    console.log("GitHub Pages Published.");
});
