"use strict";
/*
Часть 1:
Создайте функцию “removeKeys”, которая принимает два аргумента: первый это объект 
второй это массив строк.
Эта функция должна вернуть исходный объект у которого не будет ключей, названия 
которых есть в массиве (втором аргумента). Например:
removeKeys({ a: 1, b: [], c: '' }, ['a', 'c'])
Вернёт { b: [] }
*/

function removeKeys(obj, arr){
    
    for(var i = 0; i < arr.length; i++) {
        var el = arr[i]; // el это повторяющийся ключ объекта в массиве, который мы потом удаляем.
        if(el in obj) {
            delete obj[el];
        }
    }
    return obj;
} 
   
console.log( removeKeys({ a: 1, b: [], c: '' }, ['a', 'g', 'c']) );

//delete obj.a;
//console.log(obj);

/*
for(var i = 0; i < 3; i++){
    var elem = mas[i];
    if('elem' in obj) {
        delete person.elem;
        var vs = obj;
    }
    console.log(vs);
}
console.log(mas[1]);
console.log(obj);
console.log(vs);
//if ("a" in obj) {
//    alert( "Свойство name существует!" );
//  }

//console.log( removeKeys({ a: 1, b: [], c: '' }, ['a', 'c']) ) ;


/*
var s = new Object();

s.name = 'Вася';

s.age = 25;

console.log(s);
console.log(s.name);
console.log(s['name']);
*/