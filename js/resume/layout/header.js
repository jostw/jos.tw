/*
 * jos.tw
 *
 * https://github.com/jostw/jos.tw
 *
 * Copyright (c) 2015 jos
 * Licensed under the GPLv2 license.
 */

document.addEventListener("DOMContentLoaded", () => {
    const $email = document.getElementsByClassName("js-email")[0];

    $email.href = "mailto:mail@jos.tw";
    $email.title = "mail@jos.tw";
    $email.innerHTML = "mail@jos.tw";
});
