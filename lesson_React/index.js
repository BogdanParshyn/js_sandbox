"use strict";
/*
const arr = ['1', '3', '2', '4'];

const res = arr
    .map( (el) => parseInt(el) )
    .filter( (num) => num%2 )
    .reduce( (max, value) => Math.max(max, value), 0);

    console.log(res);

    */
/*
const arr = [3, 2, 3];

const res = Math.max.apply(Math, arr);
console.log(res);


/*
let a = 'Joe';
console.log(a);

a = 'Bob';
console.log(a);

const pi = 3.14;
//pi = 4;

const names = ['Peter', 'Bob'];
console.log(names);

names.push('jenny');
console.log(names);

//names = [];

const person = {
    name: 'Joee',
    age: 25
};

person.name = 'Bob';
console.log(person);


for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i)
    }, i * 100)
}
*/

/*
function square(x) {
    return x * x;
}

console.log(square(2));

const sq = (x) => x*x;
console.log(square(3));

const arr = ['1', '3', '2', '4'];
const res = arr
    .map( (el) => parseInt(el) )
    .filter( (num) => num%2)
    .reduce( (max, value) => Math.max(max, value), 0);
*/

/*
var user = {
    name: 'Василий',

    fo: 'good rabit',
  
    sayHi: function() {
      showName(this); // передать текущий объект в showName
    }
  };
  
  function showName(namedObj) {
    console.log( namedObj.fo );
  }
  
  user.sayHi(); // Василий
*/

/*
function fOrders(count = 10, start = 0) {
    console.log('Getting', count, 'orders starting from', start);
}

fOrders(15, 1);

function fProducts(opts = { minPrice: 10, maxPrice: 20} ) {
    console.log(opts);
}

fProducts( {} );
*/

/*
function max(a, f, ... numbers) {

    //var arr = arguments;
    console.log(numbers);
    for(let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
    
}

max(1, 4, 7, 3);
max(1, 4);
*/

/*
const arr1 = [1, 2, 3];
const arr2 = [4, 7, 1];
console.log(arr1);
console.log(...arr1);
console.log(...arr1, ...arr2);

let res = Math.max(...arr1, ...arr2);
console.log(res);

let es = Math.max(21, ...arr1, 88, ...arr2, 34);
console.log(es);

const shCopy = [... arr1, ...arr2, 35];
console.log(shCopy);
*/
/*
const person = {
    fName: 'Peter',
    lName: 'Smith',
};

//const fName = person.fName;
//const lName = person.lName;

const { fName, lName} = person;

console.log(fName);
console.log(lName);
*/

/*
const person = {
    name: {
        fName: 'Peter',
        lName: 'Smith', 
    },
    age: 25
};

const { name: { fName: f, lName: l } }= person;

console.log(f);
console.log(l);
*/

// =================================================================================== //
/*
const animal = {
    say: function() {
        console.log(this.name + ' goes ' + this.voice);
    }
};

function createAnimal(name, voice) {
    const result = Object.create(animal);
    result.name = name;
    result.voice = voice;
    return result;
}

const dog = createAnimal('Dog', 'woof');
const cat = createAnimal('Cat', 'meow');

dog.say();
cat.say();
*/
// =================================================================================== //

/*
function Animal(name, voice) {
    this.name = name;
    this.voice = voice;
}

Animal.prototype.say = function() {
    console.log(this.name, 'goes', this.voice);
}

const dog = new Animal('Dog', 'woof');
const cat = new Animal('Cat', 'meow');

dog.say();
cat.say();

//const dd = new Animal(1);
//console.log(dd);
*/
// =================================================================================== //

class Animal {
    constructor(name, voice) {
        this.name = name;
        this.voice = voice;
    }

    say() {
        console.log(this.name, 'goes', this.voice);
    }
}

class Bird extends Animal {

}

const duck = new Bird('Duck', 'quack');
duck.say();
