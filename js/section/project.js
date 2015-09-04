/*
 * jos.tw
 *
 * https://github.com/jostw/jos.tw
 *
 * Copyright (c) 2015 jos
 * Licensed under the GPLv2 license.
 */

"use strict";

import "babel/polyfill";

export function init() {
    const $projectCheckboxes = Array.from(document.getElementsByClassName("js-project-checkbox"));

    $projectCheckboxes.map(($projectCheckbox) => {
        const $projectScreen = $projectCheckbox.nextElementSibling.children[1].children[1];

        const projectCheckboxHandler = () => {
            $projectScreen.setAttribute("src", $projectScreen.getAttribute("data-src"));

            $projectScreen.onload = () => {
                $projectScreen.removeAttribute("data-src");

                $projectCheckbox.removeEventListener("change", projectCheckboxHandler);
            };
        };

        $projectCheckbox.addEventListener("change", projectCheckboxHandler);
    });
};
