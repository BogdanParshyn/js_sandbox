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

//let man = new Human({ name: 'ivan', age: 19 });
//man.sayHello();

    class AlevelStudent extends Human{
      constructor({name, age, marks}){
        super({name, age});
        this.marks = marks;
      }

      

        averageMark() {
          //console.log(this.marks);
          
            let avItem = this.marks.reduce((sum, item) => sum + item, 0) / this.marks.length
            //return avItem;
            return console.log(avItem);
        };
}

//let stud = new AlevelStudent({ name: 'Ivan', age: 19, marks: [1, 2, 3, 4, 5] });
//stud.averageMark();
//stud.sayHello();

/*
Part 2:Создать класс  Calculator, со следующими методами:
reset() - сбрасывает текущий результат на 0
add(num) - изменяет текущий результат добавляя к нему num
sub(num) - изменяет текущий результат отнимая от него num
mul(num) - изменяет текущий результат умножая его на num
div(num) - изменяет текущий результат деля его на num
pow(num) - изменяет текущий результат возводя его в степень num
sqrt() - изменяет текущий результат, взяв у него квадратный корень
getResult() - возвращает текущий результат
Все методы кроме getResult - возвращают this, пример:
(new Calculator()).add(3).reset().sub(3).mul(2).div(3).pow(4).sqrt().getResult() // returns 4
*/

class Calculator {
    constructor(result, num = 0) {
        this.result = result;
        this.num = num;
    }

    reset() {
        this.result = 0;
        return this;
    }
    
    add(num) {
      if (typeof num != 'number') num = 0;
        this.result += num;
        return this;
    }
  
    sub(num) {
      if (typeof num != 'number') num = 0;
        this.result -= num;
        return this;
    }
  
  
    mul(num) {
      if (typeof num != 'number') num = 1;
        this.result *= num;
        return this;
    }
  
    div(num) {
      if (typeof num != 'number') num = 1;
        this.result /= num;
        return this;
    }
  
    pow(num) {
      if (typeof num != 'number') num = 1;
        this.result = Math.pow(this.result, num);
        return this;
    }
  
    sqrt() {
        this.result = Math.sqrt(this.result);
        return this;
    }
  
    getResult() {
        return this.result;
        //return console.log(this.result);
    }
}
const calculator = new Calculator().add(3).reset().sub(3).mul(2).div(3).pow(4).sqrt().getResult();

/*
Part 4*:Создать класс CalculatorExtended, который наследует класс Calculator из части 2.
Заменить метод toString, чтобы он возвращал историю операций калькулятора и результат:

const calc = new CalculatorExtended();
calc.add(3).reset().sub(3).mul(2).div(3).pow(4).sqrt();
calc.toString(); // √(((0 - 3) * 2 / 3) ^ 4) = 4
Еще примеры:
calc.reset().div(2).reset().mul(2).toString() // 0 * 2 = 0
calc.reset().div(2).mul(2).toString() // 0 / 2 * 2 = 0
calc.reset().sub(3).div(2).toString() // (0 - 3) / 2 = -1.5
calc.reset().sqrt().toString() // √(0) = 0
calc.reset().add(4).sqrt().toString() // √(0 + 4) = 2
calc.reset().add(4).mul(2).mul(2).toString() // (0 + 4) * 2 * 2 = 16
*/

class CalculatorExtended extends Calculator {
  constructor(num, storage = '') {
      super(num)
      this._storage = storage;
  }
  reset() {
      this._result = 0;
      this._storage = 0;
      return this;
  }
  add(num) {
      if (typeof num !== 'number') num = 0;
      this._result += num;
      this._storage = this._storage + ' + ' + num;
      return this;
  }
  sub(num) {
      if (typeof num !== 'number') num = 0;
      this._result -= num;
      this._storage = this._storage + ' - ' + num;
      return this;
  }
  mul(num) {
      if (typeof num !== 'number') num = 1;
      this._result *= num;
      if (this._result === 0 || this._storage.split('')[this._storage.length - 3] === '*' || this._storage.split('')[this._storage.length - 3] === '/') {
          this._storage = this._storage + ' * ' + num;
      } else {
          this._storage = '(' + this._storage + ') * ' + num;
      }
      return this;
  }
  div(num) {
      if (typeof num !== 'number') num = 1;
      this._result /= num;
      if (this._result === 0 || this._storage.split('')[this._storage.length - 3] === '*' || this._storage.split('')[this._storage.length - 3] === '/') {
          this._storage = this._storage + ' / ' + num;
      } else {
          this._storage = '(' + this._storage + ') / ' + num;
      }

      return this;
  }
  pow(num) {
      if (typeof num !== 'number') num = 1;
      this._result = Math.pow(this._result, num);
      this._storage = '(' + this._storage + ') ^ ' + num;
      return this;
  }
  sqrt() {
      this._result = Math.sqrt(this._result);
      this._storage = String.fromCharCode(8730) + '(' + this._storage + ')'
      return this;
  }
  toString() {
      return console.log(this._storage + ' = ' + this._result);
  }
}
const calc2 = new CalculatorExtended();