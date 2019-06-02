"use strict";

function Person() {
    // Конструктор Person() определяет `this` как экземпляр самого себя.
    this.age = 0;

    setInterval(function growUp() {
        // Без использования `use strict`, функция growUp() определяет `this`
        // как глобальный объект, который отличается от `this`,
        // определённого конструктором Person().
        this.age++;
    }, 1000);
}
var p = new Person();

console.log(p);

let getFinalPrice = (price, tax = 0.7) => console.log(price + price * tax);
getFinalPrice(500); // 850, так как значение tax не задано

getFinalPrice(500, 0.2); // 600, значение tax по-умолчанию заменяется на 0.2

getFinalPrice(500, 0.); // 600, значение tax по-умолчанию заменяется на 0.2

function foo(...args) {
    console.log(args);
}
foo(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]

function getCar(make, model, value) {
    return {
        // с синтаксисом короткой записи можно
        // пропускать значение свойства, если оно
        // совпадает с именем переменной, значение
        // которой мы хотим использовать
        make,  // аналогично make: make
        model, // аналогично model: model
        value, // аналогично value: value

        // вычисляемые свойства теперь работают в
        // литералах объекта
        ['make' + make]: true,

        // Короткая запись метода объекта пропускает
        // ключевое слово `function` и двоеточие. Вместо
        // "depreciate: function() {}" можно написать:
        depreciate() {
            this.value -= 2500;
        }
    };
}

let car = getCar('Kia', 'Sorento', 40000);
console.log(car);
// {
//     make: 'Kia',
//     model:'Sorento',
//     value: 40000,
//     makeKia: true,
//     depreciate: function()
// }

var parent = {
    foo() {
        console.log("Привет от Родителя!");
    }
}

var child = {
    foo() {
        super.foo();
        console.log("Привет от Ребёнка!");
    }
}

Object.setPrototypeOf(child, parent);
child.foo();

let nicknames = ['di', 'boo', 'punkeye'];
//nicknames.size = 3;
for (let nick of nicknames) {
    console.log(nick);
}
// di
// boo
// punkeye