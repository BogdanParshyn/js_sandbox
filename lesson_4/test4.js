"use strict";

function makeImages() {
    for(let i = 0; i < arguments.length; i += 1) {
        const div = document.createElement('div');
        const img = document.createElement('img');

        document.body.append(div);
        div.append(img);
        img.src = arguments[i];
    }
}

const w = makeImages('./img_1.png', './img_2.png', './img_3.png');
console.log( w );