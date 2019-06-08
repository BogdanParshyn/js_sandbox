"use strict";

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