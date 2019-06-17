"use strict";

function onEnd() {
    console.log('end');
}

//onEnd();
//setTimeout(onEnd, 1000);
//console.log('5');

function func(phrase, who, whow) {
    console.log( phrase + ', ' + who + ' ' + whow);
    
}
  
//setTimeout(func, 1000, "Привет", "Вася", "Вася"); // Привет, Вася

function func(phrase, who, whow) {
    //console.log( phrase + ', ' + who + ' ' + whow);
    
}
  
//setTimeout(func, 1000, "Привет", "Вася", "Вася"); // Привет, Вася
//setTimeout(func, 3000, "Привет", "ВFedy", "Goos"); // Привет, Вася

/*
var timerId = setTimeout(function() { console.log(12) }, 1000);

console.log(timerId); // число - идентификатор таймера

clearTimeout(timerId);
console.log(timerId); // всё ещё число, оно не обнуляется после отмены
*/

/** вместо:
var timerId = setInterval(function() {
  alert( "тик" );
}, 2000);
*/

/*
var timerId = setTimeout(
    function tick() {
        console.log( "тик" ); 
        //let s = tick();
        timerId = setTimeout(tick, 5000);
    }, 2000);
 */   

/*
   let i = '1';
   setInterval(function() {
     console.log(func(i));
   }, 1000);
 */
   let s = '2';
   console.log((s));
   setTimeout(function run() {
    console.log(func(s));
    setTimeout(run, 232000);
  }, 10000);
 