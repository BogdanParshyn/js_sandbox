// Замыкание

/*
function a(arg) {
    var num = arg;

    function b() {
        console.log(num++);
    }
    return b
}
*/


/*
// Классы
class SomeClass {
    doSomth() {
        console.log(this);
    }
}

const foo = new SomeClass();

foo.doSomth();
foo.doSomth();

const bar = foo.doSomth.bind(foo);

bar();

window.SomeClass = SomeClass;

call
apply
bind
*/

/*
class SomeClass {
    doSomth() {
        console.log(arg, this);
    }

    do() {
        new AnotherClass(this.doSmth)
    }
}

class AnotherClass{
    constructor(callback) {
        this.callback = callback; // this будет AnotherClass
        setTimeout(() => callback(5), 5000)
        setTimeout( (function() { this.callback(5) }).bind(this), 5000) // тоже саможе, что и на строчке выше.
    }
 }

 const foo = new SomeClass();

 foo.do();
 */


 //ООП - Объектно ориентированное программирование.
 //Все делать через классы. Строить логику на основе классов.

 class UI {

 }

class ServerController Х

 class App {
    constructor() {
        new UI();
        new ServerController();
    }
 }

 new App();

 Инкапсуляция - ограничение закрытие доступа к каким-то вещам.
 
 
 
//Наследование:

 class Fruit{
     constructor() {
         this.color = Math.random();
     }

     eat() {}
 }

 class Apple extends Fruit{
     constructor() {
         super();

         this.size = 5
     }
 }

 const a = new Apple();

 console.log(a);


 // Полиморфизм:

 class Fruit{
    constructor() {
        this.color = Math.random();
    }

    eat() {
        console.log('eat');
    }
}

class Apple extends Fruit{
    constructor() {
        super();

        this.size = 5
    }

    eat() { // это метод
        supper.eat();
        console.log('apple');
    }


}

const a = new Apple();
const b = new Fruit();

a.eat();
b.eat();

console.log(a);

// ======================================================================== //

//fetch - это запросы на сервер.

//fetch('http://localhost:1234')

fetch('http://localhost:1234/?data=hello')
    .then(res => res.text()) // объект респонса. Этот метод возвращает пропис
    .then(res => res.json())
    .then(text => console.log(text))
    .catch(err => console.warn(err));

//const xhr = new XMLHttpRequest()

// ReadableStream поток байтов от сервера


fetch('http://localhost:1234/?data=hello', {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify( { hello: 'word' } )
})
    .then(res => res.json())
    .then(text => console.log(text))
    .catch(err => console.warn(err));