"use strict";

/*
function addScript(src){
    var script = document.createElement('script');
    script.src = src;
    script.async = false; // чтобы гарантировать порядок
    document.body.appendChild(script);
    //document.head.appendChild(script);
    script.innerHTML = "456";
  }
  
  addScript('1.js'); // загружаться эти скрипты начнут сразу
  addScript('2.js'); // выполнятся, как только загрузятся
  addScript('3.js'); // но, гарантированно, в порядке 1 -> 2 -> 3

  
  function addDiv(src){
    var div = document.createElement('div');
    div.style = "we";
    document.body.appendChild(div);
    div.innerHTML = "456";
    
    
}
  
addDiv(); 
addDiv(); 
addDiv();  

alert('Я - Java Script!');


alert('Привет'); 
alert('Мир');

alert("Сейчас будет ошибка");

[1, 2].forEach(alert);



var admin;
var name;
name = "Василий";
admin = name;

alert(admin);


var ourPlanet = "Земля";

var nameUser = "Петя";


alert( parseInt('122344px') ) // 12, ошибка на символе 'p'
alert( parseFloat('12л.3.4') ) // 12.3, ошибка на второй точке


console.log( isNaN(null) ); //  false - не NaN, т.е. "число"
console.log( isNaN(false) ); //  false - не NaN, т.е. "число"
console.log( isNaN(true) ); //  false - не NaN, т.е. "число"
console.log( isNaN(NaN + 1) ); 
console.log( isNaN(0/0) );  


function isNumeric(n) {
    return !isNaN(parseFloat(n)) + isFinite(n);
  }

console.log( isNumeric('4') );
console.log( isNumeric(NaN) );
console.log( isNumeric('sdsf') );
console.log( isNumeric(null) );
console.log( isNumeric(false) );
console.log( isNumeric(true) );
console.log( isNumeric(Infinity) );


console.log( isFinite("") ); // true


console.log( 12.3 ^ 1 ); // 12
console.log( 1.2 + 1.3 ^ 0,5 ); // 2, приоритет ^ меньше, чем +

console.log( 12.3 ^ 2 + 2 ); // 12



var n = 12.34;
console.log( +n.toFixed(5) ); // "12.34000", добавлены нули до 5 знаков после запятой

var result = 0.1 + 0.2;
console.log( +result.toFixed(10) ); // 0.3



var firstNumber = prompt('Введите 1-е число', 100);
var secondtNumber = prompt('Введите 2-е число', 100);

alert(+firstNumber + +secondtNumber);


var randomNumber = Math.random() * 10;

console.log(randomNumber);

var min = 1;
var max = 2;

console.log(min + Math.random()* (max - min));


var a = 'I\'m a JavaScript programmer';

console.log(a);


alert( "Интерфейс".toUpperCase() ); // ИНТЕРФЕЙС
alert( "Интерфейс"[0].toLowerCase() ); // 'и'


var name = 'vasya';

function ucFirst(str) {
  console.log(str[0].toUpperCase() + str.slice(1));
}

ucFirst(name);


function checkSpam(str) {
  //str.toLowerCase().indexOf('viagra') || str.toLowerCase().indexOf('xxx') ? console.log(true) : console.log(false);
}

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false


function truncate(str, maxlength) {
    if(str.length > maxlength) {
      
      str = str.slice(0, maxlength-3) + "...";
    } else {
      str = str;
    } return console.log(str);
}

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20); // = "Вот, что мне хоте..."
truncate("Всем привет!", 20); // = "Всем привет!"


function extractCurrencyValue(str) {
  return console.log(+str.slice(1));
}

extractCurrencyValue("$120");


var a = 1, b = 1, c, d;

c = ++a; alert(c); // 2 ок
d = b++; alert(d); // 1 ок

а уже равна 2
b уже равна 2

c = (2+ ++a); alert(c); // 5 ок
d = (2+ b++); alert(d); // 4 ок

а уже равна 3
b уже равна 3

alert(a); // 3
alert(b); // 3

// =============

var a = 2;

var x = 1 + (a *= 2); // 5



var test = prompt("Тест", '')

console.log(test);



var wisyn = prompt("Напишите Ваше имя?", '')

alert(wisyn);


var ECMA = prompt( "Каково «официальное» название JavaScript?", "&");

if(ECMA == "ECMAScript") {
    alert("Верно!");
} else {
    alert("Не знаете? «ECMAScript»!");
}


var a = prompt( "Введите число", "&");

if(a > 0) {
    alert(1);
} else if(a < 0) {
    alert(-1);
} else {
    alert(0);
}




var login = prompt( "Введите логин", "");

if(login == "Админ") {

    var pass = prompt( "Введите пароль", "");

          if(pass == "Черный Властелин") {
              alert("Добро пожаловать");
          } else if(pass == null) {
              alert("Ввод отменен");
          } else {
              alert("Пароль неверен");
          }

} else if(login == null) {
    alert("Вход отменен");

} else {
    alert("Я вас не знаю");

}



if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

result = a + b < 4 ? "Мало" : "Много";



var message;

if (login == 'Вася') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
/// =================================
var message;

message = (login == 'Вася') ? 'Привет':
          (login == 'Директор') ? 'Здравствуйте':
          (login == '') ? 'Нет логина':
          '';


var age = 91;

if(!(age >= 14 && age <= 90)) {
    alert("Ok");
} else {
    alert("No..");  
}


//alert( "\n0 " === 0 ); // true

alert(Boolean('0'));
alert(Boolean(0));
 

"" + 1 + 0 // "10"
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // "$45"

"4" - 2 // 2

"4px" - 2 // NaN

7 / 0 // infinity

"  -9\n" + 5 // " -9\n5"
"  -9\n" - 5 // -14
5 && 2 //2

2 && 5 //5

5 || 0 // 5

0 || 5 // 5
null + 1 // 1
undefined + 1 //NaN
null == "\n0\n" // false
+null == +"\n0\n" // true
////////////////////////////////////////////



var i = 0;
while (i < 3) {
  alert( i );
  i++;
}


//
for(var i = 2; i <= 10; i++) {

    if(i%2 != 0) continue;
        console.log(i); 
}



var num;

do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num != null);



next:
  for (var i = 2; i <= 10; i++) {

    for (var j = 2; j < i; j++) {
      if (i % j == 0) continue next;
    }

    console.log( i ); // простое
  }

// ================================================
switch (browser) {
  case 'IE':
    alert( 'О, да у вас IE!' );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Да, и эти браузеры мы поддерживаем' );
    break;

  default:
    alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}

var browser = 'Safari';

if(browser === 'IE') {
    alert( 'О, да у вас IE!' );

} else if(browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
    alert( 'Да, и эти браузеры мы поддерживаем' );

} else {
    alert( 'Мы надеемся, что и в вашем браузере все ок!' ); 
}
// ===================================================================================


var a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}



var a = +prompt('a?', '');

switch(a) {
  case 0:
      alert( 0 );
      break;

  case 1:
      alert( 1 );
      break;

  case 2:
  case 3:
      alert( 2, 3 );
      break;
}
// ===================================================================================

function checkAge(age) {

    return (age > 18) ? true : confirm('Родители разрешили?');
  
}

function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}
// ===================================================================================


function min(a, b) {
  var res = (a < b) ? a : b 

  return console.log(res);
}

min(7, 5);
// ===================================================================================


//var x = +prompt("число", "");
//var n = +prompt("степень", "");

function pow(x, n) {
    var res = 1;
    for(var i=0; i < n; i++) {
      res = res * x;  
    }

    return console.log(res);
}

//pow(x, n);
pow(2, 2);
pow(5, 2);
pow(3, 4);
pow(1, 1);
pow(7, 2);
pow(2, 5);
// ===================================================================================


var obj = {};

obj.name = "Vasya";
obj.surname = "Petrov";

obj.name = "Serj";

delete obj.name
// ===================================================================================
*/


