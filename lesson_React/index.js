"use strict";
/*
const arr = ['1', '3', '2', '4'];

const res = arr
    .map( (el) => parseInt(el) )
    .filter( (num) => num%2 )
    .reduce( (max, value) => Math.max(max, value), 0);

    console.log(res);

    */
const arr = [3, 2, 3];

const res = Math.max.apply(Math, arr);
console.log(res);