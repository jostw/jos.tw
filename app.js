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
import http from "http";

import browserSync from "browser-sync";

import { port } from "./config";

const isDev = ((argv) => argv && argv.match("dev"))(process.argv[2]);

const server = http.createServer((req, res) => {
    let file;

    if (req.url === "/") {
        file = fs.readFileSync("index.html").toString();

        if (isDev) {
            file = file.replace("<script src=\"/js/script.js\"></script>", "<script src=\"http://localhost:" + port.webpack + "/js/script.js\"></script>");
            file = file.replace("<!-- browser-sync -->", "<script async src=\"http://localhost:" + port.browserSync + "/browser-sync/browser-sync-client.js\"></script>");
        }
    } else {
        file = fs.readFileSync("." + req.url);
    }

    console.log(req.method, req.url);

    res.end(file);
});

server.listen(port.app, () => {
    console.log("Server started at port", port.app);

    if (isDev) {
        const browserSyncServer = browserSync.create();

        browserSyncServer.watch("index.html").on("change", browserSyncServer.reload);

        browserSyncServer.init({
            logSnippet: false,
            reloadOnRestart: true,

            port: port.browserSync
        });
    }
});
