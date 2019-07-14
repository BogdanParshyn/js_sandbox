"use strict";

/*
Async
- setTimeout
- setInterval
*/
/*
function onEnd() {
    console.log('end');
}

onEnd();
setTimeout(onEnd, 1000);
console.log('5');

console.log('10');
/*
// ==================================================================//
/*
function calculate(cb){
    const sum = 2 + 0.3;

    //setTimeout( () => cb(sum), 1000);

    function onClick() {
        cb(sum);

        window.removeEventListener('click', onClick);
    }

    window.addEventListener('click', onClick);
    //cb(sum);
}

calculate(res => console.log(res));
*/
// ================================================================== //

//new Promise()

//new Promise( (resolve, reject) => { resolve() })
//new Promise( (resolve, reject) => { reject() })

/*
new Promise( (resolve, reject) => { 
    setTimeout(resolve, 10000);
});

tmp = new Promise( (resolve, reject) => { 
    setTimeout(resolve, 10000);
});
*/
// =====

/*
const tmp = new Promise( (resolve, reject) => { 
    setTimeout(resolve, 3000);
});

//console.log(tmp.then());
tmp.then(() => console.log('Promise resolved'));
console.log(tmp.then());
tmp.then(() => console.log('Promise resolved too'));
tmp.then(() => console.log('Promise resolved, and me'));
tmp.then(() => console.log('Promise resolved, here too'));
//tmp.then(main);
console.log('2');

console.log('1');
*/

/*
function waitForClick(){
    return new Promise((resolve) => {
        window.addEventListener('click', resolve);
    });
}

waitForClick()
.then( () => {
    console.log('Seriosly?');

    return waitForClick();
})
.then(waitForClick)
.then(waitForClick)
.then(waitForClick)
.then( () => console.log('You are crazy'))
.then( () => console.log('You are crazy'));
*/

/*
waitForClick().then( () => console.log('clicked'));

tmp
    .then(() => new Promise((resolve, reject) => {
        console.log('first');
        setTimeout(resolve, 3000);
    }))
    .then(() => console.log('Promise resolved too'));

console.log('2'); 
*/

/*
function waitForTime(ms){
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

function waitForClick(){
    return new Promise((resolve) => {
        window.addEventListener('click', resolve);
    });
}

waitForClick()
.then(() => console.log('Seriosly?'))
.then(waitForClick)
.then(() => waitForTime(3000))
.then(waitForClick)
.then( () => console.log('You are crazy'));
*/

/*
function alwaysReject() {
    return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
});
}

alwaysReject()
    .then(() => console.log('Yes yes yes'))
    .then(() => console.log('1212'))
    .catch(() => console.log('No no no'))
    .then(() => console.lg('sssssssssssssssssssss'))
    .catch(() => console.log('wau No no no')); 

//.then and .catch это методы Promise.
*/

/*
// Создаётся объект promise
for(var i = 0; i < 7; i++ ) {

let promise = new Promise((resolve, reject) => {
    
    
    if(i < 3) {
        setTimeout(() => {
            // переведёт промис в состояние fulfilled с результатом "result"
            resolve("result");
        }, 1000);
    } else {
        setTimeout(() => {
            // переведёт промис в состояние fulfilled с результатом "result"
            reject("error");
        }, 1000);
    }
    
});

// promise.then навешивает обработчики на успешный результат или ошибку
promise
  .then(
    result => {
      // первая функция-обработчик - запустится при вызове resolve
      console.log("Fulfilled: " + result); // result - аргумент resolve
    },
    error => {
      // вторая функция - запустится при вызове reject
      console.log("Rejected: " + error); // error - аргумент reject
    }
  );
}
*/
// ===================================================
/*
function httpGet(url) {

    return new Promise(function(resolve, reject) {
  
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
  
      xhr.onload = function() {
        if (this.status == 200) {
          resolve(this.response);
        } else {
          var error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };
  
      xhr.onerror = function() {
        reject(new Error("Network Error"));
      };
  
      xhr.send();
    });
  
  }

  httpGet("/article/promise/user.json")
  .then(
    response => alert(`Fulfilled: ${response}`),
    error => alert(`Rejected: ${error}`)
  );
  */

  // Промис выполнится сразу же
var promise = new Promise((resolve, reject) => resolve(1));
console.log(promise);
promise.then( function f1(result) {
  console.log(result); // 1
  //return 'f1';
})

promise.then( function f2(result) {
    console.log(result); // 1
  //return 'f2';
})
console.log(promise);