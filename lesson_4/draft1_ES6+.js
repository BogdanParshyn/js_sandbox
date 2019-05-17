"use strict";

// Строковые шаблоны: `Hello, my name is ${name}`
//const name = 'John';

//console.log('Hello, my name is ` + name + ""');
//console.log(`Hello, my name is ${name}.`);
//console.log(`Hello, my name is ${name}.${a} ${b} ${c}`);

//rest
/*
function makeSum(){
    let sum = 0;
    for(let i = 0; i < arguments; i += 1) {
        sum += arguments[i];
    }
    return sum;
}

const data = [ 1, 2, 3, 4 ];

console.log (makeSum(data) );
console.log (makeSum(...data) );
console.log ( makeSum(10,...data) );
*/
/*
function makeSum(){
    letsum = 0;
    console.log(arguments);
    for(let i = 0; i < arguments.length; i += 1) {
        sum += arguments[i];
    }
    return sum;
}

const data = [ 1, 2, 3, 4 ];

makeSum(...data);
makeSum(10,...data);
*/

/*
newData = [...data];
newData = [...data, ...data];
newData = [...data, 10, ...data];

obj = {a: 1, b: 2, c: 'c'};
newObj = {...obj};
newObj = {...obj, d: 'd'};
newObj = {...obj, d: 'd', a: 'a'};
newObj = {a: 'a', ...obj, d: 'd'};
newObj = {...obj, ...obj};

anotherObject = {a: '_', b: '_'}

newObject = {...obj, anotherObject};

newObject = {...anotherObject, ...obj};
*/
//
/*
function makeSum(...args){
    let sum = 0;
    console.log(args);
    for(let i = 0; i < args.length; i += 1) {
        sum += args[i];
    }
    return sum;
}

const data = [ 1, 2, 3, 4 ];

console.log (makeSum(data) );
*/
//

// REST - (... 'название' массива)
function makeSum(a, b, ...args){
    let sum = 0;
    console.log(args);
    for(let i = 0; i < args.length; i += 1) {
        sum += args[i];
    }
    return sum;
}

const data = [ 1, 2, 3, 4 ];

console.log (makeSum(data) );
