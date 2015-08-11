/*
 * jos.tw
 *
 * https://github.com/jostw/jos.tw
 *
 * Copyright (c) 2015 jos
 * Licensed under the GPLv2 license.
 */

"use strict";

import http from "http";
import fs from "fs";

import { port } from "./config";

const server = http.createServer((req, res) => {
    const filename = req.url === "/" ? "index.html" : "." + req.url;

    console.log(req.method, req.url);

    res.end(fs.readFileSync(filename));
});

server.listen(port.app, () => {
    console.log("Server started at port", port.app);
});
