"use strict";

//Часть 1:

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
        return avItem;
        //return console.log(avItem);
    };
}

//let stud = new AlevelStudent({ name: 'Ivan', age: 19, marks: [1, 2, 3, 4, 5] });
//stud.averageMark();
//stud.sayHello();
// ========================================================================================= //
//Часть 2:

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
// ========================================================================================= //
//Часть 3:
                  

// ========================================================================================= //
//Часть 4:

class CalculatorExtended extends Calculator{
  constructor(num, result, str, n) {
      super(num, result);
      this.str = str;
      this.n = n;
  }
  reset() { 
      this.result = 0;
      this.str = 0;
      this.n = 0; 
      return this;  
  }

  add(num) { 
      if (typeof num === 'number'){
          this.result += num; 
          this.str = this.str + ' + ' + num;
          this.n = 1; 
          return this; 
      }
  }

  sub(num) { 
      if (typeof num === 'number'){
          this.result -= num; 
          this.str = this.str + ' - ' + num;
          this.n = 1; 
          return this;  
      }
  }

  mul(num) { 
      if (typeof num === 'number'){
          this.result *= num;
          
          if(this.n == 1) {
              this.str = '(' + this.str + ') * ' + num;
          } else {
          this.str = this.str + ' * ' + num;
          }

          this.n = 0;
          return this;  
      }
  }

  div(num) { 
      if (typeof num === 'number'){
          this.result /= num;
          
          if(this.n == 1) {
              this.str = '(' + this.str + ') / ' + num;
          } else {
          this.str = this.str + ' / ' + num;
          }

          this.n = 0;
          return this;  
      }
  }

  pow(num) { 
      if (typeof num === 'number'){
          this.result = Math.pow(this.result, num);
          this.str = '(' + this.str + ') ^ ' + num;
          this.n = 0;
          return this; 
      }
  }

  sqrt() { 
      this.result = Math.sqrt(this.result);
      this.str = '√(' + this.str + ')';
      this.n = 0;
      return this;  
  }

  getResult() {
      return this.result;
  }

  toString() {
      return this.str + ' = ' + this.result;
  }
}


const calc = new CalculatorExtended();