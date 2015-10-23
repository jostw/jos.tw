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

export function init() {
    const $contactForm = document.getElementsByClassName("js-contact-form")[0];
    const $contactFormName = document.getElementsByClassName("js-contact-form-name")[0];
    const $contactFormEmail = document.getElementsByClassName("js-contact-form-email")[0];
    const $contactFormMessage = document.getElementsByClassName("js-contact-form-message")[0];
    const $contactFormComplete = document.getElementsByClassName("js-contact-form-complete")[0];

    $contactForm.onsubmit = () => {
        $contactForm.className += " form-loading";

        $contactFormName.readOnly = true;
        $contactFormEmail.readOnly = true;
        $contactFormMessage.readOnly = true;

        firebase.child("messages").push({
            name: $contactFormName.value,
            email: $contactFormEmail.value,
            message: $contactFormMessage.value
        }, () => {
            setTimeout(() => {
                $contactForm.className += " form-complete";
            }, 500);
        });

        return false;
    };

    $contactFormComplete.onclick = () => {
        $contactForm.className = "form js-contact-form";

        $contactFormName.value = "";
        $contactFormName.readOnly = false;

        $contactFormEmail.value = "";
        $contactFormEmail.readOnly = false;

        $contactFormMessage.value = "";
        $contactFormMessage.readOnly = false;

        $contactFormName.focus();

        return false;
    };
}
