"use strict";
/*
const button1 = document.createElement('button'); 
const button2 = document.createElement('button'); 
const button3 = document.createElement('button'); 

button1.innerHTML = "1";
button2.innerHTML = "2";
button3.innerHTML = "3";

document.body.append(button1, button2, button3);
*/
/*
button1.onclick = () => console.log('click1');
button2.onclick = () => console.log('click2');
button3.onclick = () => console.log('click3');

button1.addEventListener( () => console.log('click1') );
button1.addEventListener( () => console.log('click2') );
button1.onclick = () => console.log('click2');

function reset() {
    button.onclick = null;
}

function reset() {
    button1.addEventListener( () => console.log('click1') );
    button1.addEventListener( () => console.log('click2') );
    button1.addEventListener( () => console.log('click3') );
}
*/
// 

/*
const onClick1 = () => console.log('click1');
const onClick2 = () => console.log('click2');

button1.addEventListener('click', onClick1);
button1.addEventListener('click', onClick2);

function reset() {
    button1.removeEventListener('click', onClick1);
    button1.removeEventListener('click', onClick2);
}

window.addEventListener('mousemove', () => console.log('move'));
button1.addEventListener('mousemove', () => console.log('button move'));

window.addEventListener('mousemove', () => console.log('move', event));
*/
// button1.style.marginRight Кемел кейс
// margin_right Снек кейс
// margin-right

// button1.style.margin = 
button1.addEventListener('click', onClick1);
button1.addEventListener('click', onClick2);

function reset() {
    button1.removeEventListener('click', onClick1);
    button1.removeEventListener('click', onClick2);
}
window.addEventListener('mousemove', (event) => {
    button1.style.top = `${event.y}px`;
    button1.style.left = `${event.x}px`;
});

button1.style.backgroundColor = 'red';
button1.style.borderRadius = '50%';
button1.style.position = 'absolute';