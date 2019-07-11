"use strict";
// Part 1:

function removeKeys(obj, arr) {
    for(var i = 0; i < arr.length; i++) {
        var el = arr[i]; // el это повторяющийся ключ объекта в массиве, который мы потом удаляем.

        if(el in obj) {
            delete obj[el]; // Если элемент массива есть в объекте, то мы его удаляем.
        }

    }
    return obj; // возвращается подчистенный объект с индивидуальным ключем и его значением.
}

// Chekin:
// console.log(removeKeys({ a: 1, b: [], c: '' }, ['a', 'c'])); //исходный объект у которого не будет ключей, названия которых есть в массиве
// ========================================================================================= //

// Part 2:

function clearNumbers(arr) {
    for(var i = arr.length - 1; i >= 0; i -= 1) {

        for(var j = arr[i].length - 1; j >= 0; j -= 1) {
        
            typeof arr[i][j] !== 'number' ? arr[i].splice(j, 1) : arr; // Заходим в каждый значение (массивчик) массива arr и чистим если данное значение если оно не число.
        }

        arr[i].length == 0 ? arr.splice(i, 1) : arr; // Если после чистки значения (массивчика) у него не останется ни одного значения (все не подходят), то мы его удаляем с основгого массива arr.
    }
    return arr;
}

// Chekin:
// console.log(clearNumbers([[1, "a", () => {}], [{}, 2, 3], [null, -3, 'q']]));
// console.log(clearNumbers(  [  [1, "a", () => {}], [{}, 2, 3], [null, -3, 'q'], [null, "a", 'q'], [{}, 2, 3]   ]  ));
// ========================================================================================= //

// Part 3:

function reverse() {
    var arr = []; // Создали новый массив.

    for(var i = 0; i < arguments.length; i++) {
        arr[i] = arguments[i]; // В массив перегнали данные из arguments как его значения - ["123", "456"]
        arr[i] = arr[i].split("").reverse().join("");
        // split-ом -   [ ["1", "2", "3"], ["4", "5", "6"] ] - значения массива (строки) превратили в массивчики.
        // reverse-ом - [ ["3", "2", "1"], ["6", "5", "4"] ] - в каждой итерации перевернули значения массивчиков.
        // join-ом -               ["321", "654"]            - массивчики опять вернули в значения строки.
    }
    
    return arr.reverse(); // reverse-ом - ["654", "321"] - перевернули (начало с концом) значения в основном массиве.
}

// Chekin:
//console.log( reverse('123', '456') );
// Вернет ['654', '321']
// ========================================================================================= //

// Part 4:

function join() {

    var arr = [];
    for (var i = 0; i < arguments.length; i++) {
        arr[i] = arguments[i];
    } // Аргумент перелили в массив.

    for(var i = arr.length; i >= 0; i--) {
        if(typeof (arr[i]) !== "object") {
            arr.splice(i, 1); // так мы удаляем все что не объект из массива.
        }
    } 
    //console.log(arr); // Проверка вывода.
    var objS = {};

    for(var i = 0; i < arr.length; i++) {
        var keysObjS = Object.keys(arr[i]); // Вытягиваем клюли объекта.
        var objCompare = arr[i];
        for(var j = 0; j < keysObjS.length; j++) {
            var a = objS[keysObjS[j]]; // переводим каждый ключ основного (созданного для результата) объекта в переменную для упрощения кода, по итерации.
            var b = objCompare[keysObjS[j]] // переводим каждый ключ сравниваемых объектов в переменную для упрощения кода.

            if(keysObjS[j] in objS) { // Ищем каждый ключ сравниваемого объекта в своей итерации с исходным объектом.
                
                    if(Array.isArray(a)) { // по всем етим условиям делаем сложение значений повторяющихся ключей.
                        objS[keysObjS[j]] = a.concat(b);

                    } else if(typeof a == "object") {
                        a = 0;
                        objS[keysObjS[j]] = a + b;

                    } else if(typeof b == "object") {
                        b = 0;
                        objS[keysObjS[j]] = a + b;

                    } else if(typeof a === 'string' || typeof b === 'string') {
                        objS[keysObjS[j]] = a + b;
                    
                    } else if(typeof a === 'number' || typeof b === 'number') {
                        objS[keysObjS[j]] = a + b;
                        
                    } else if(typeof a === 'number' && typeof b === 'number') {

                    }

            } else {
                objS[keysObjS[j]] = b; // Если такого ключа нет, то так мы его добавляем в исходный объект.
            }
        }
        //
    }
        return objS; 
}

// Chekin:
//console.log( join(3, { name: 'K', k: [3], j: {} }, 'Hello', { n: 3, k: [4] }, { n: 7, name: 'ent', j: 13 }) );
// Вернет { name: 'Kent', k: [3, 4], n: 10, j: 13 };