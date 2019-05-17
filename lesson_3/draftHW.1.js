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


class Human{
    name: "Ivan",
    age: "19",


    sayHello() {
        console.log("Hello,my name is " + this.name + ", I am " + this.age + " years old");
    }
};

Human();
*/


class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }

}

let user = new User("Вася");
user.sayHi(); // Вася