"use strict";

//Часть 1:

const div = document.createElement('div');
document.body.append(div);

div.style.height = "200vh";
div.className = "block";
div.innerHTML = ""

function waitForScroll(){
    return new Promise((resolve) => {
        window.addEventListener('scroll', resolve);
    });
}

function drawOnScroll() {
    let mRd = Math.round;
    let mRm = Math.random;
    let color = `rgb(${mRd(mRm() * 255)}, ${mRd(mRm() * 255)}, ${mRd(mRm() * 255)})`;
    div.style.backgroundColor = color;
}

waitForScroll()
    .then(drawOnScroll);
// ========================================================================================= //
//Часть 2:

function waitForAnswer() {
    return new Promise((resolve) => {
        window.addEventListener('keydown', resolve);
    });
}


/*
waitForScrol()
.then( () => {
    div.style.backgroundColor = "red";

    //return waitForClick();
})
*/

//.then(waitForClick)


/*
setTimeout(function() {
    div.parentNode.removeChild(div);
  }, 1000);
*/

//div.innerHTML = "<strong>Ура!</strong> Вы прочитали это важное сообщение.";

//var textElem = document.createTextNode('Тут был я');
//document.body.appendChild(textElem);


//document.body.style(div);

//document.body.style.backgroundColor = 'red';
/*
const div = document.createElement('div');

div.style.height = '200%';

function newRandomColor() {
    let color = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
    return color;//, console.log(color);
}

//newRandomColor();

function waitForScroll() {
    return new Promise((resolve) => {
        window.addEventListener('scroll', resolve);
    });
}
*/
