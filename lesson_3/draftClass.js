"use strict";

//Ранее ООР было прототипное.
// Как написать класс:
/*
class Human{
    //все что находится в фигурных скобках является методами или свойствами класса.
    sayHello() {
        console.log('Hello');
    }
}

const me = new Human();
const he = new Human();

me.sayHello(); // А вот Human.sayHello() не можем вызвать.
*/
////
class Human{
    constructor(name) {
        this.name = name;

    }

    sayHello() {
        console.log('Hello, my name is ' + this.name);
    }
}

//const me = new Human('Bob');
//const he = new Human('Jake');

//me.sayHello(); // А вот Human.sayHello() не можем вызвать.

////

/*
class Student extends Human {
    setMark(mark){
        this.mark = mark;
    }

    sayHello() {
        console.log('Hello, my name is ' + this.name);
    }

}

class BadStudent extends Student {

}

const me = new Human('Bob');
const he = new Human('Jake');
const marley = new Student('Marley');

me.sayHello();
he.sayHello();
marley.sayHello();
*/

// ПОЛИМОРФИЗМ - свойство объекта изменяться под себя.

/*
class Student extends Human {
    constructor(name, mark) {
        super(name);
        console.log('Hello, my name is ' + this.name + ' And ent');
        this.mark = mark;
    }


    setMark(mark){
        this.mark = mark;
    }

    sayHello() {
        super.sayHello();
        console.log('Hello, my name is ' + this.name + ' And I am a student');
    }

    
}

class BadStudent extends Student {
    constructor(name, mark) {
        super(name);

        this.mark = mark;
    }
}

const me = new Human('Bob');
const he = new Human('Jake');
const marley = new Student('Marley');
const jane = new Student('Jane');
me.sayHello();
he.sayHello();
marley.sayHello();
jane.sayHello();
*/
////
// Инкапсуляция - защита от внешних изменений.

class Student extends Human {
    constructor(name, mark) {
        super(name);
        console.log('Hello, my name is ' + this.name + ' And ent');
        this.mark = mark;
    }
// Начало инкапсуляции, пример.
    getMark() {
        return this._mark;
    }

    setMark(mark){
        if(typeof mark === "number") {
        this._mark = mark;
        }  
    }
// Конец инкапсуляции, пример.
    sayHello() {
        super.sayHello();
        console.log('Hello, my name is ' + this.name + ' And I am a student');
    }

    
}

class BadStudent extends Student {
    constructor(name, mark) {
        super(name);

        this.mark = mark;
    }
}

const me = new Human('Bob');
const he = new Human('Jake');
const marley = new Student('Marley');
const jane = new Student('Jane');
me.sayHello();
he.sayHello();
marley.sayHello();
jane.sayHello();

//

function newFunction() {
    console.log('sdfsf');
}

Human.prototype.newFunction = newFunction; 
// Создали ключ в объекте prototype. Это объек с каким-то набором методов.
// instanceof - нужно разобрать.