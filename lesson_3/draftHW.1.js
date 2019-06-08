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
        return this.result;//, console.log(this.result);
    }
}
const calculator = new Calculator().add(3).reset().sub(3).mul(2).div(3).pow(4).sqrt().getResult();

// ========================================================================= //

class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    toString(){
        //return `Point[${this.x} ${this.y}]`;
        return console.log(`Point[${this.x} ${this.y}]`);
    }

    set(x, y){
        this.x = x;
        this.y = y;
        return console.log(this); //return this;
    }

    getX(){
        //return this.x;
        return console.log(this.x);
    }

    getY(){
        //return this.y;
        return console.log(this.y);
    }
}

let ss = new Point("x", "y");
ss.toString();
ss.set(32, 2);
ss.getX();
ss.getY();

/*
class Line{
    constructor(point1, point2){
        this.point1 = point1;
        this.point2 = point2;
    }
    toString(){
        return `Line(${this.point1.toString()} - ${this.point2.toString()})`;
    }

    length(){
        return Math.sqrt(Math.pow( ( this.point2.getX()  - this.point1.getX() ), 2) + 
                        Math.pow( ( this.point2.getY()  - this.point1.getY() ), 2) );
    }
}
 */
/*
class WeightedPoint extends Point{
    constructor(x, y, weight){
        super(x, y);
        this.weight = weight;
    }

    toString(){
        return `${this.weight}&${super.toString()}`;
    }

    set(x, y, weight){
        super.set(x, y);
        this.weight = weight;
        return this;
    }

    getWeight(){
        return this.weight;
    }
}
*/

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
calc.add(3).reset().sub(3).mul(2).div(3).pow(4).sqrt();
//console.log(calc.add(1).reset().sub(3).mul(2).div(3).pow(4).sqrt());
console.log(calc.toString());  // √(((0 - 3) * 2 / 3) ^ 4) = 4
console.log(calc.reset().div(2).reset().mul(2).toString()); // 0 * 2 = 0
console.log(calc.reset().div(2).mul(2).toString()); // 0 / 2 * 2 = 0
console.log(calc.reset().sub(3).div(2).toString()); // (0 - 3) / 2 = -1.5
console.log(calc.reset().sqrt().toString()); // √(0) = 0
console.log(calc.reset().add(4).sqrt().toString()); // √(0 + 4) = 2
console.log(calc.reset().add(4).mul(2).mul(2).toString()); // (0 + 4) * 2 * 2 = 16
console.log(calc.reset().add(4).add(4).add(4).mul(2).add(4).add(4).add(4).mul(2).toString()); 