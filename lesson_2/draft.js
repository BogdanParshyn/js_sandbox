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
   
//console.log( removeKeys({ a: 1, b: [], c: '' }, ['a', 'g', 'c']) );

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

// ========================================================================================= //
// ========================================================================================= //
// ========================================================================================= //
/*Часть 2:
Написать функцию clearNumbers, которая принимает один аргумент - массив массивов. 
Функция должна вернуть этот же массив массивов, но очистив их от не числовых значений. Пример:

clearNumbers([[1, "a", () => {}], [{}, 2, 3], [null, -3, 'q']]);
Вернет: [[1], [2, 3], [-3]]
*/

//clearNumbers([[1, "a", () => {}], [{}, 2, 3], [null, -3, 'q']]);

//var mas = [1, 2, null ];

////var a = null;
var b = -4;

//var kkk = mas.splice(1, 1);
//console.log(mas);
//console.log(typeof mas[0] === 'number');



//var arr = [1, "a", "v", () => {}, 3, "v", 3, Infinity, 0, -Infinity, null];
////var arr = [[1, "a", () => {}], [{}, 2, 3], [null, -3, 'q']];
//arr.splice(1, 1);
////var a = arr[2];
////console.log(a);
//Array(1).splice(1, 1) ;
////console.log(arr.length);
//console.log(arr);
//console.log(typeof arr[0]);
//console.log(typeof arr[1]);
//console.log(typeof arr[2]);
//arr.splice(2, 1);

////console.log(typeof arr[1][1]);

function clearNumbers(arr){
    for(var i = arr.length - 1; i >= 0; i -= 1) {

        for(var j = arr[i].length - 1; j >= 0; j -= 1) {
        
            if(typeof arr[i][j] !== 'number') {
                //console.log(arr[i][j]);
                arr[i].splice(j, 1);
            } 
            //console.log(arr[i][j]);
        }
        if(arr[i].length == 0){
            arr.splice(i, 1);
        }
    }
    return arr;
}
//console.log(arr);
//console.log(clearNumbers( [[1, "a", () => {}], [{}, 2, 3], [null, -3, 'q']]) );

// Оптимизируем код:
function clearNumbers(arr){
    for(var i = arr.length - 1; i >= 0; i -= 1) {

        for(var j = arr[i].length - 1; j >= 0; j -= 1) {
        
            typeof arr[i][j] !== 'number' ? arr[i].splice(j, 1) : arr;
        }

        arr[i].length == 0 ? arr.splice(i, 1) : arr; 
    }
    return arr;
}
console.log(clearNumbers( [[1, "a", () => {}], [{}, 2, 3], [null, -3, 'q'], [null, -3, 'q'], [1, "a", () => {}], [1, "a", Infinity]]) );

// ========================================================================================= //
// ========================================================================================= //
// ========================================================================================= //
/*
Часть 3:
Написать функцию reverse, которая принимает бесконечное количество аргументов, 
где каждый и них - строка. Функция должна вернуть массив строк в обратном порядке, 
где каждая строка - будет задом-наперед, Например:
reverse('123', '456')
Вернет ['654', '321']
*/