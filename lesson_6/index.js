"use strict";

var randomEmail = require("random-email");
var validatorEmail = require("email-validator");
var formatValidator = require("format-validator");


let button = document.getElementById('generate');
let mainR = document.getElementById('random');
let close = document.getElementById('close');

button.addEventListener('click', (event) => {
    mainR.style.display = 'block';
    mainR.innerHTML = randomEmail();
    mainR.append(close);
});

close.addEventListener('click', event => {
    mainR.style.display = 'none';
});


let valid = document.getElementById('validate');
valid.addEventListener('change', event => {
    if(valid.value=='') {
        valid.style.border = '2px solid grey';
    }
    if(validator.validate(valid.value)) {
        valid.style.border = '2px solid green';
    } else {
        valid.style.border = '2px solid red';
    }
});