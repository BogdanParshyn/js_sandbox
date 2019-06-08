"use strict";
/*
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr1 === arr2);

window.arr1 = arr1;
window.arr2 = arr2;

console.log(arr1 === arr2);

//оператор ...

const obj1 = {a: 1, b: 2, c:3};
const obj2 = {...arr1};
const obj3 = {a: 5, ...arr1};
const obj4 = {a: 5, d: 'gp', ...arr1};
*/

/*
function sum(...args){
    console.log(args);
}

window.sum = sum;

sum(1, 2, 'd');

function sum(base, ...args){
    console.log(base, args);
}

window.sum = sum;

sum(1, 2, 3);

function sum(base, oneMoreArg, ...hell){
    console.log(base, oneMoreArg, hell);
}

window.sum = sum;

sum(1, 2, 3);
*/


/*
function sum(base){
    const {a, c} = base;

    console.log(a, c);  
}

const obj = {a: 1, b: 2, c:3};

window.sum = sum;
window.obj = obj;
sum(obj);

let [a, b, c] = [2, 5]
*/

// ============================================================================= //
// События:
/*
const div = document.getElementById('num');

let count = 0;
function onScroll(){
    div.innerHTML = count++;
}

window.addEventListener('scroll', onScroll);
//window.addEventListener('mouse');
*/
/*
const div = document.getElementById('num');

let count = 0;
function onScroll(){
    div.innerHTML = count++;
    if(count > 100){
        window.removeEventListener('scroll', onScroll);
    }
}

window.addEventListener('scroll', onScroll);
*/
/*
const div = document.getElementById('num');

let count = 0;
function onScroll(){
    div.innerHTML = count++;

    //event.preventDefault();

    if(count > 100){
        window.removeEventListener('scroll', onScroll);
    }
}

window.addEventListener('scroll', onScroll);
*/
/*
const link = document.getElementById('google');
function onLinkClick(event){
    event.preventDefault();
    event.stopPropagation();
    console.log(event);
}

link.addEventListener('click', onLinkClick);
window.addEventListener('click', () => console.log('GLOBAL CLICK'));
*/
/*
const link = document.getElementById('google');
function onLinkClick(event){
    event.preventDefault();
    //event.stopPropagation();
    console.log(event);
}

link.addEventListener('click', onLinkClick);
window.addEventListener('click', e => {
    console.log('window');
    //e.stopPropagation();
}, true);
*/

// ======================================================================== //

//Замыкания

function main() {
    let i = 0;

    const fn = () => console.log(i);

    i = 10;

    //return () => console.log(i);
    return fn
}

let i = -100
window.main = main;

fn();

const fn2 = main();
fn2();