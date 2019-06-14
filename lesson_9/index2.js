"use strict";

/*
Async
- setTimeout
- setInterval
*/
/*
function onEnd() {
    console.log('end');
}

onEnd();
setTimeout(onEnd, 1000);
console.log('5');

console.log('10');
/*
// ==================================================================//
/*
function calculate(cb){
    const sum = 2 + 0.3;

    //setTimeout( () => cb(sum), 1000);

    function onClick() {
        cb(sum);

        window.removeEventListener('click', onClick);
    }

    window.addEventListener('click', onClick);
    //cb(sum);
}

calculate(res => console.log(res));
*/
// ================================================================== //

//new Promise()
/*
new Promise( (resolve, reject) => { resolve() })
new Promise( (resolve, reject) => { reject() })


new Promise( (resolve, reject) => { 
    setTimeout(resolve, 10000);
});

tmp = new Promise( (resolve, reject) => { 
    setTimeout(resolve, 10000);
});
*/
// =====

/*
const tmp = new Promise( (resolve, reject) => { 
    setTimeout(resolve, 3000);
});

tmp.then(() => console.log('Promise resolved'));
tmp.then(() => console.log('Promise resolved too'));
tmp.then(() => console.log('Promise resolved, and me'));
tmp.then(() => console.log('Promise resolved, here too'));
//tmp.then(main);
console.log('2');

console.log('1');
*/

/*
function waitForClick(){
    return new Promise((resolve) => {
        window.addEventListener('click', resolve);
    });
}

waitForClick()
.then( () => {
    console.log('Seriosly?');

    return waitForClick();
})
.then(waitForClick)
.then(waitForClick)
.then(waitForClick)
.then( () => console.log('You are crazy'))
.then( () => console.log('You are crazy'));
*/

/*
waitForClick().then( () => console.log('clicked'));

tmp
    .then(() => new Promise((resolve, reject) => {
        console.log('first');
        setTimeout(resolve, 3000);
    }))
    .then(() => console.log('Promise resolved too'));

console.log('2'); 
*/

/*
function waitForTime(ms){
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

function waitForClick(){
    return new Promise((resolve) => {
        window.addEventListener('click', resolve);
    });
}

waitForClick()
.then(() => console.log('Seriosly?'))
.then(waitForClick)
.then(() => waitForTime(3000))
.then(waitForClick)
.then( () => console.log('You are crazy'));
*/

function alwaysReject() {
    return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
});
}

alwaysReject()
    .then(() => console.log('Yes yes yes'))
    .then(() => console.log('1212'))
    .catch(() => console.log('No no no'))
    .then(() => console.lg('sssssssssssssssssssss'))
    .catch(() => console.log('wau No no no')); 

//.then and .catch это методы Promise.