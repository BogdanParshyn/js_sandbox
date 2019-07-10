"use strict";

// part 1:

function makeGreetings(number) {

    var year;
    var number = String(number);

    if(number.slice(-2) > 10 && number.slice(-2) < 15) {
        year = "лет";

    } else if(number.slice(-1) > 1 && number.slice(-1) < 5 ) {
        year = "года";

    } else if(number.slice(-1) == 1) {
        year = "год";
    } else {
        year = "лет";
    }

    return console.log("Мой возраст " + number + " " + year); 
}

/*
Checking

console.log("год");
makeGreetings(1); // год
makeGreetings(21);
makeGreetings(31);
makeGreetings(101);
makeGreetings(1001);

console.log("года");
makeGreetings(2); // года
makeGreetings(3);
makeGreetings(4);
makeGreetings(22);
makeGreetings(23);
makeGreetings(24);
makeGreetings(122);
makeGreetings(123);
makeGreetings(124);

console.log("лет");
makeGreetings(5); // лет
makeGreetings(6);
makeGreetings(7);
makeGreetings(8);
makeGreetings(9);
makeGreetings(10);
makeGreetings(11);
makeGreetings(12);
makeGreetings(13);
makeGreetings(14);
makeGreetings(15);
makeGreetings(16);
makeGreetings(17);
makeGreetings(18);
makeGreetings(19);
makeGreetings(20);
makeGreetings(100);
makeGreetings(1000);
makeGreetings(1100);
*/
// ========================================================================================================= //

// part 2:

function splitArray(arr, index) {
    var newArr = Array();

    for(var i = 0; i < arr.length / index; i++) {
        
        newArr[i] = arr.slice(i * index, i * index + index);
        //console.log(newArr);
    }

    return newArr;
    //Checking
    //return console.log(newArr);
}

//splitArray([1, 4, 5, 6, 2, 6, 2], 4);
//splitArray([1, 4, 5, 6, 2], 2);

// ========================================================================================================= //

// part 3:

function add(a) {
    return function add(b) {
        return a + b;
    }

}

/*
Checking
console.log(add(2)(3));
console.log(add(4)(-1));
console.log(add(2)(10 - 20));
*/

// ========================================================================================================= //

// part 4:

function transformData(res) {
    var object = {};
    for(var i = 0; i < res.length; i++) {
        if(res[i].mark > 5) {
            var keyObject = res[i].login; // Значение ключа login из res назначаем 1-м ключем object
            var itFN = res[i].firstName; // Берем значение ключа firstName из res в переменную.
            var itLN = res[i].lastName; // Берем значение ключа lastName из res в переменную.
            var itKeyObject; // Назначаем значение, которое будет передаваться в каждый ключ нового object

            if(itFN == '' || itLN == '') {
                itKeyObject = itFN + itLN; 
            } else {
                itKeyObject = itFN + ' ' + itLN; // Если в двух значениях есть имена, то между ними нужен пробел. 
            }
            //itKeyObject = itFN + itLN; 
            object[keyObject] = itKeyObject;
        }
    }

    return object;
    //Checking
    //return console.log(object);

}

/*
transformData([
    { login: 'johnny778', firstName: 'John', lastName: 'Doe', mark: 10 },
    { login: 'superman', firstName: 'Mark', lastName: 'Coulson', mark: 3 },
    { login: 'alexgerman', firstName: 'Alex', lastName: '', mark: 7 },
   ])
*/
// res: { johnny778: 'John Doe', alexgerman: 'Alex' }

// ========================================================================================================= //

// part 5:
// Нужно задать вопрос по .result
function addInfinite(a) {
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

//console.log(addInfinite(2).result); // 2 =/ 2 === 
console.log(addInfinite(2)(3)); // 5 === .result
//console.log(addInfinite(2)(5)(6)(-7)(8).result) // 14 === 

function f(n) {
    return n ? n * f(n - 1) : 1;
  };
  
  console.log( f(10) ); // 120

  function f(n) {
    return n ? n * f(n - 1) : 1;
  };
  
  var g = f;
  //f = null;
  
  alert( g(5) ); // запуск функции с новым именем - ошибка при выполнении!

  var a = 4;

  var b = a;

  a = null;

  console.log(a);
  console.log(b);

