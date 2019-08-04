"use strict";

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    } 

    sayHello() {
        console.log(`Hello, my name is ${name}, I am ${age} years old`)
    }
}

const h = new Human( 'ivan',  19 );
h.sayHello();
