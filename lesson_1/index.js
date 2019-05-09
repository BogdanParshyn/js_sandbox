"use strict";
//Часть 1:
function makeGreetings(age){
    var i = age.length;
    var t = "Мой возраст " + age; 
    
    if(age[i-1] == 1 && age[i-2] != 1){
        return t + ' год';
    } else if (1 < age[i-1] && age[i-1] < 5 && age[i-2] != 1){
        return t + ' года';
    } else {
        return t + ' лет';
    }
}
// ========================================================================================= //
//Часть 2:
function splitArray(arr, n) {
    var newArr = Array( Math.ceil(arr.length / n) );
    for (var i = 0; i < arr.length/n; i += 1) {
        newArr[i] = arr.slice(i * n, i * n + n);
    }
    return newArr;
}
// ========================================================================================= //
//Часть 3:
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
} // Эта функция работает с любым количеством после add.


function add(a) {
    return function add(b) {
        return a + b;  
    }
} // Эта функция работает только с двумя элементами после add.
// ========================================================================================= //
//Часть 4:
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