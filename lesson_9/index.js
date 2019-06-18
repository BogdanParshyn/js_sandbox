"use strict";

const div = document.createElement('div');

div.style.height = '200%';

function newRandomColor() {
    let color = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
    return color;//, console.log(color);
}

//newRandomColor();

function waitForScroll() {
    return new Promise((resolve) => {
        window.addEventListener('scroll', resolve);
    });
}

function drawOnScroll(){
    waitForScroll()
        .then(() => {
            div.style.background = newRandomColor();
        });
} 
window.waitForScroll = waitForScroll;
window.drawOnScroll = drawOnScroll;