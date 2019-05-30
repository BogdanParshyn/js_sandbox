"use strict";

/*
Part 1:
Создать класс  Human, который в качестве аргумента принимает объект с ключами name(содержит имя 
строкой), age(содержит возраст числом).
Human({ name: 'ivan', age: 19 })
У класса Human должен быть метод sayHello, который будет выводить в консоль строку “Hello, 
my name is ${name}, I am ${age} years old”
Создать класс AlevelStudent, наследуемый от Human, который принимает в себя параметры name, 
age и новый ключ marks, которой будет содержать массив ваших оценок за домашние задание 
числами ([5, 3, 5, 1, 4])
AlevelStudent({ name: 'Ivan', age: 19, marks: [1, 2, 3, 4, 5] });
У класса AlevelStudent должен быть метод averageMark, который возвращает среднее значение из 
вашего массива оценок

*/
class Human{
  constructor({name, age}){
    this.name = name;
    this.age = age;
  }
/*
    sayHello() {
        console.log("Hello, my name is " + this.name + ", I am " + this.age + " years old");
    }
*/
    sayHello() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`);
    }
};

let man = new Human({ name: 'ivan', age: 19 });
man.sayHello();

class AlevelStudent extends Human{
  constructor({name, age, marks}){
    super({name, age});
    this.marks = marks;
  }

  averageMark() {
    if( Array.isArray(this.marks) ) {
      
    }


    let averageItem = this.marks.reduce(function(sum, item) {
      return sum + item;
    }, 0);
  }

};

let stud = new AlevelStudent( {marks: [1, 2, 3, 4, 5] });
stud.sayHello();

