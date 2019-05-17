"use strict";

const sameVar = 5;
//samVar = 10; Так делать нельзя, так как переменная через const назначается только раз.

console.log(sameVar);

let same2Var = 5;
same2Var = 10; //Так делать можно.

console.log(same2Var);

// Объявление области видимости.
{
    var hello = 'h';
}
// Ниже указано ограничение област видимости.
{
    let hello2 = 'h2';
}
//console.log(hello2);


{
    const arr = [];

    arr[0] = 1;

    console.log(arr);
} // Так видит.
{
    const arr = [];

    arr[0] = 1;

   
} 
//console.log(arr);// А так не видно.

function someFunction(){
    console.log('Hello');
}

function functionWithArgument(a, b, c){
    console.log(a, b, c);
}

function functionWithLogic(a, b){
    const sum = a + b;
    console.log(sum);

    return sum;
}

function functionWithSA(a){

    return a + 5;
}

// Как переписать на стрелочные.
const arrowFunction = () => console.log('Hello');

const arrowWithArgument = (a, b, c) => console.log(a, b, c);

const arrowWithLogic = (a, b) => {
    const sum = a + b;
    console.log(sum);

    return sum;
}

const arroWithSA = a => a + 5;


//
// Параметры по умолчанию.
const arrowWithSA = (a = 0) => a + 5;

const onDefoult = () => {
    console.log('Used default value!');
    return 0
};

const arrowWithSA = (a = onDefoult()) => a + 5;

//
const onDefoult = () => {
    throw new Error('Argument required');
    return 0;
};

const arroWithSA = (a = onDefoult()) => a + 5;

//
// This. Возвращает любой вызванный объект. Обозначает контекст вызова функции.
const obj = {
    hello: function() {
        console.log('Hello', this)
    }
}

const obj2 = {name: 'My name'};

obj2.hello = obj.hello;

const hello = obj2.hello
//

function increment(){
    this.count += 1;
}

const array = [{ count: 0, increment: increment}, 
               { count: 0, increment: increment}, 
               { count: 0, increment: increment},
              ];
// Или так:             
const array = [{ count: 0, increment}, 
               { count: 0, increment}, 
               { count: 0, increment},
               ];


//// У стрелочной функции зис указывается перед вызовом функции.
const obj = {
    hello: function() {
        console.log('Hello', this)
    }
}   

function increment(){
    this.count += 1;

    this.hello = () => 
    console.log('Hello', this);
}


// Метод функции bind. Он назначает this.

// ========================================================================================//
/* ООП - объектно оринтированное программированние.
- Все - это объект
- данные - свойства
- действия - методы



Наследование, 
Полиморфизм,
Инкапсуляйция.
*/
