/*
 * jos.tw
 *
 * https://github.com/jostw/jos.tw
 *
 * Copyright (c) 2015 jos
 * Licensed under the GPLv2 license.
 */

"use strict";

var http = require("http"),
    fs = require("fs");

var server = http.createServer(function(req, res) {
    var filename = req.url === "/" ? "index.html" : "." + req.url;

    console.log(req.method, req.url);

    res.end(fs.readFileSync(filename));
});

server.listen(3000, function() {
    console.log("Server started at port 3000");
});
