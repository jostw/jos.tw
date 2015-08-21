/*
 * jos.tw
 *
 * https://github.com/jostw/jos.tw
 *
 * Copyright (c) 2015 jos
 * Licensed under the GPLv2 license.
 */

"use strict";

import Firebase from "firebase";

const firebase = new Firebase("https://jostw.firebaseio.com");

document.addEventListener("DOMContentLoaded", () => {
    const $contactForm = document.getElementsByClassName("js-contact-form")[0];

    $contactForm.onsubmit = () => {
        firebase.child("messages").push({
            name: document.getElementsByClassName("js-contact-form-name")[0].value,
            email: document.getElementsByClassName("js-contact-form-email")[0].value,
            message: document.getElementsByClassName("js-contact-form-message")[0].value
        });

        return false;
    };
});
