/*
 * jos.tw
 *
 * https://github.com/jostw/jos.tw
 *
 * Copyright (c) 2015 jos
 * Licensed under the GPLv2 license.
 */

"use strict";

import "normalize.css";
import "../css/index.css";

import "modernizr";
import "./vendor/plugins";

import "../img/jos-tw.png";

import "../img/jos.png";
import "../img/jos-front-end-developer.png";

import "../img/muzik-air-screen.png";
import "../img/muzik-online-screen.png";
import "../img/muzik-study-screen.png";
import "../img/imusic-screen.png";

import "../img/sparkler.png";

import * as project from "./section/project";
import * as contact from "./section/contact";

import skrollr from "skrollr";
import ScrollReveal from "scrollreveal";

document.addEventListener("DOMContentLoaded", () => {
    project.init();
    contact.init();

    skrollr.init({ forceHeight: false });

    window.sr = new ScrollReveal({ reset: true });
});
