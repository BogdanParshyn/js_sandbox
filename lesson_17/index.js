"use strict";

/*
let User = class {
  sayHi() { console.log('Привет!'); }
  sayHu() { console.log('By'); }
};

new User().sayHi();
new User().sayHu();
*/
// =================================================================================== //
/*
let allModels = {};

function createModel(Model, ...args) {
  let model = new Model(...args);

  model._id = Math.random().toString(36).slice(2);
  allModels[model._id] = model;

  return model;
}

let user = createModel(class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}, "Вася");

user.sayHi(); // Вася

console.log( allModels[user._id].name ); // Вася
console.log(allModels);
*/
// =================================================================================== //
/*
class User {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    // геттер
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    // сеттер
    set fullName(newValue) {
      [this.firstName, this.lastName] = newValue.split(' ');
    }
  
    // вычисляемое название метода
    ["test".toUpperCase()]() {
        console.log("PASSED!");
    }
  
  };
  
  let user = new User("Вася", "Пупков");
  console.log( user.fullName ); // Вася Пупков
  console.log(user );

  user.fullName = "Иван Петров";
  console.log( user.fullName ); // Иван Петров
  console.log(user );

  user.TEST(); // PASSED!
  */
// =================================================================================== //

/*

class Animal {
  constructor(name) {
    this.name = name;
  }

  walk() {
    alert("I walk: " + this.name);
  }
}
var o = new Animal('Uecm');
o.walk();

// I walk: Вася
// and jump!
*/

class Animal {
    constructor(name) {
      this.name = "lll";
    }
    
  }
  
  class Rabbit extends Animal {
    constructor() {
      //alert(this); // ошибка, this не определён!
      // обязаны вызвать super() до обращения к this
      super();
      console.log(this);// а вот здесь уже можно использовать this
    }
  }
  
  new Rabbit();

  //var S = new Animal("sdsd");