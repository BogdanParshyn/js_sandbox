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
//console.log('Задание 2');
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
//console.log(clearNumbers( [[1, "a", () => {}], [{}, 2, 3], [null, -3, 'q']]) );

// ========================================================================================= //
// ========================================================================================= //
// ========================================================================================= //
/*
Часть 3:
Написать функцию reverse, которая принимает бесконечное количество аргументов, 
где каждый из них - строка. Функция должна вернуть массив строк в обратном порядке, 
где каждая строка - будет задом-наперед, Например:
reverse('123', '456')
Вернет ['654', '321']
*/


function reverse() {

    var arr = [];
    

    for(var i = 0; i < arguments.length; i += 1){
    
        arr[i] = arguments[i];
        arr[i] = arr[i].split("").reverse().join("");
        //console.log (arguments.length);

        //console.log (arguments[i] ); // 5, обновленный x
        //console.log (arr );
    }
    return arr.reverse();
}

//console.log(reverse('2123', '456'));

//console.log("=======================================================================");
//var arrS = ['123', '234', 'kf3'];
//arrS[0].revers;
//console.log(arrS);
//arrS[1] = arrS[1].split("").reverse().join("");
//console.log(arrS[1]);

//console.log(arrS);
//console.log("=======================================================================");




function reverseStr(str) {

    var newStr = '', i;

    for (i = str.length - 1; i >= 0; i--) {
        console.log(newStr + 'n');
        newStr += str.charAt(i);
        console.log(newStr + 's');

    }

    return newStr;

}

//console.log(reverseStr('123'));

//console.log("Тестируем 3-е задание:=======================================================================");
function reverse() {
    var arr = [];
    
    for(var i = 0; i < arguments.length; i += 1){

        arr[i] = arguments[i];
        arr[i] = arr[i].split("").reverse().join("");
    }
    return arr.reverse() ;
}

//console.log(reverse('чиворднаскелА', 'надгоБ', 'нишраП'));

// ========================================================================================= //
// ========================================================================================= //
// ========================================================================================= //
/*
Часть 4*:
Написать функцию “join”, которая принимает неограниченное количество аргументов,
Эта функция должна вернуть первый объект из аргументов, к которому необходимо “присоединить” 
все остальные объекты которые есть в аргументах (у этого объекта должны быть все ключи всех 
объектов), если ключи повторяются, то необходимо их значения:
сложить: числа, строки, массив: соединить, заменить в другом случае), пример:
join(3, { name: 'K', k: [3], j: {} }, 'Hello', { n: 3, k: [4] }, { n: 7, name: 'ent', j: 13 });
Вернет:
{ name: 'Kent', k: [3, 4], n: 10, j: 13 };
*/
function join(...arg) {
    //var el;
    for(var i = arg.length - 1; i >= 0; i -= 1) {
        
        typeof arg[i] == 'object' ? arg : arg.splice(i, 1); 
    }
    
    //for(arg[i].)
    return arg;

}
//console.log( join(0, { name: 1}, '2', { n: 3}, {j: 4} ) );

//console.log( join(3, { name: 'K', k: [3], j: {} }, 'Hello', { n: 3, k: [4] }, { n: 7, name: 'ent', j: 13 }) );

//console.log(typeof{ name: 'K', k: [3], j: {} });

/*
function join(...arg) {
    
    for(var i = arg.length - 1; i >= 0; i -= 1) {
        
        typeof arg[i] == 'object' ? arg : arg.splice(i, 1); 
    }
    
    for(var k = 1; k < arg.length; k += 1) {
        var el = arg[i];
        var firstObj = arg[0];
        for(var j = 0; i < arg[j].length; i++) { 
            if(el[j] in firstObj) {
                
            }

        }
    return arg;
    }
}

console.log( join(3, { name: 'K', k: [3], j: {} }, 'Hello', { n: 3, k: [4] }, { n: 7, name: 'ent', j: 13 }) );
*/
/*var arg = [{ name: 'K', k: [3], j: {} },
           { n: 3, k: [4] }, 
           { n: 7, name: 'ent', j: 13 }];

    var firstObj = arg[0];           
    console.log(firstObj);
for(var k = 1; k < arg.length; k += 1) {

    var otherObj = arg[k];
    console.log(otherObj);
    //console.log(arg.length);
    console.log(otherObj['otherObj[0]']);
    
    for(var j = 0; j < arg[j].length; j++) { 
        if(otherObj[j] in firstObj) {
            console.log(otherObj[j]);
        } else {
            console.log("no");
        }
        console.log(otherObj[j]);
    }
}    
*/

function join(...arg) {
    
    for(var i = arg.length - 1; i >= 0; i -= 1) {
        
        typeof arg[i] == 'object' ? arg : arg.splice(i, 1); 
    }

    console.log(arg);
    console.log(arg[0]);
    var firstObj = arg[0];
    console.log(firstObj);
    console.log(firstObj[key]);

    for(var j = 1; j < arg.length; j++) {
        var otherObj = arg[j];
        
        for(var k = 0; k < otherObj.length; k++) { 
            if(otherObj[k] in firstObj) {
                console.log(jw);
            }

        }
    return arg;
    }
    return arg;
}
join(3, 
    { name: 'K', k: [3], j: {} }, 
    'Hello', 
    { n: 3, k: [4] }, 
    { n: 7, name: 'ent', j: 13 });