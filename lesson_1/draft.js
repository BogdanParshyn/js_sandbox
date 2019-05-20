"use strict";
//Часть 1:
/*Часть 1:
Создайте функцию “makeGreetings”, которая принимает один целочисленный аргумент - возраст. Она должна вернуть строку приветствие:
“Мой возраст 21 год”(без кавычек), где “21” - значение аргумента (во время проверки оно может быть любым), а окончание “год”, должно зависеть от цифры возраста, например:
21 год, 22 года, 24 года, 25 лет, 19 лет, 20 лет.*/

function makeGreetings(age){
    
    var age = String(age);
    //console.log(age);
    //console.log(typeof age);
    var i = age.length;
    var t = "Мой возраст " + age; 
    //console.log(age[i-1]);
    if(age[i-1] == 1 && age[i-2] != 1){
        return t + ' год';
    } else if (1 < age[i-1] && age[i-1] < 5 && age[i-2] != 1){
        return t + ' года';
    } else {
        return t + ' лет';
    }
}
/*
console.log(makeGreetings(0));
console.log(makeGreetings(1));
console.log(makeGreetings(2));
console.log(makeGreetings(3));
console.log(makeGreetings(4));
console.log(makeGreetings(5));
console.log(makeGreetings(6));
console.log(makeGreetings(7));
console.log(makeGreetings(8));
console.log(makeGreetings(9));
console.log(makeGreetings(10));
console.log(makeGreetings(11));
console.log(makeGreetings(12));
console.log(makeGreetings(13));
console.log(makeGreetings(14));
console.log(makeGreetings(15));
console.log(makeGreetings(16));
console.log(makeGreetings(17));
console.log(makeGreetings(18));
console.log(makeGreetings(19));
console.log(makeGreetings(20));
console.log(makeGreetings(21));
console.log(makeGreetings(22));
console.log(makeGreetings(23));
console.log(makeGreetings(24));
console.log(makeGreetings(25));
console.log(makeGreetings(26));
console.log(makeGreetings(27));
console.log(makeGreetings(28));
console.log(makeGreetings(29));
console.log(makeGreetings(101));
console.log(makeGreetings(110));
console.log(makeGreetings(111));
console.log(makeGreetings(1111));
console.log(makeGreetings(1121));
*/
// ========================================================================================= //

//Часть 2:
/*Написать функцию splitArray которая первым аргументом принимает массив чисел, а вторым количество 
элементов в подмассивах. Функция должна вернуть массив массивов. Например: 
splitArray([1, 4, 5, 6, 2], 2)
вернет [[1, 4], [5, 6], [2]].
Если количества элементов недостаточно - последний подмассив может содержать меньшее количество 
элементов.*/

function splitArray(arr, n) {
    var newArr = Array( Math.ceil(arr.length / n) );
    for (var i = 0; i < arr.length/n; i += 1) {
        newArr[i] = arr.slice(i * n, i * n + n);
    }
    return newArr;
}

//console.log( splitArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3) );
// ========================================================================================= //

//Часть 3:
/*Написать функцию add. Чтобы выполнялся следующий код:
var result1 = add(2)(3);
var result2 = add(4)(-1);
Где result1 === 5;
result2 === 3;
*/


/*
function add(a) {
    var sum = a;
        function addSum(b) {
            sum += b;
            return addSum;
        }

        addSum.toString = function() {
        return sum;
        };

    return addSum; 
}
console.log( add(2)(3)(5) );
*/

function add(a) {
    return function add(b) {
        return a + b;  
    }
}
//console.log( add(4)(-1) );

/*
function add(a) {
    return function add(b) {
        return function add(c) {
            return a + b + c;  
        } 
    }
}
console.log( add(4)(-1)(23) );
*/
// ========================================================================================= //
/*Часть 4:
Написать функцию transformData, которая принимает один аргумент - массив объектов такого вида:
{ login: 'johnny778', firstName: 'John', lastName: 'Doe', mark: 10 }
И должна вернуть объект где ключи - login объектов массиве, у которых  mark больше 5 и значения 
у этих ключей - полное имя пользователя, пример:
var res = transformData([
 { login: 'johnny778', firstName: 'John', lastName: 'Doe', mark: 10 },
 { login: 'superman', firstName: 'Mark', lastName: 'Coulson', mark: 3 },
 { login: 'alexgerman', firstName: 'Alex', lastName: '', mark: 7 },
])

// res: { johnny778: 'John Doe', alexgerman: 'Alex' }
*/
/*
var res = transformData([
 { login: 'johnny778', firstName: 'John', lastName: 'Doe', mark: 10 },
 { login: 'superman', firstName: 'Mark', lastName: 'Coulson', mark: 3 },
 { login: 'alexgerman', firstName: 'Alex', lastName: '', mark: 7 },
]);*/
/*
function transformData(res) {
    var object = {};
    for(var i = 0; i < res.length; i += 1) {
        if(res[i].mark > 5) {
            var key = res[i].login;
            var i1 = res[i].firstName;
            var i2 = res[i].lastName;
            var s;
            if(i1 == '' || i2 == '')  {
                s = i1 + i2; 
            } else {
                s = i1 + ' ' + i2;
            }
            object[key] = s;
        }
    }  
    return console.log(object);
}

console.log(transformData(res));
*/
function transformData(res) {
    var object = {};
    for(var i = 0; i < res.length; i += 1) {
        if(res[i].mark > 5) {
            var key = res[i].login;
            var i1 = res[i].firstName;
            var i2 = res[i].lastName;
            var s;
            i1 == '' || i2 == '' ? s = i1 + i2 : s = i1 + ' ' + i2;
            
            object[key] = s;
        }
    }  
    return object;
}

var res = transformData([
    { login: 'johnny778', firstName: 'John', lastName: 'Doe', mark: 10 },
    { login: 'superman', firstName: 'Mark', lastName: 'Coulson', mark: 3 },
    { login: 'alexgerman', firstName: 'Alex', lastName: '', mark: 7 },
   ]);
   
console.log(res);

