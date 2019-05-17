/*const div = document.createElement('div');

document.body.append(div);
// или так document.body.appendChild

console.log(div);
console.dir(div);
*/
// ========================================================================== //
/*
const div = document.createElement('a');

document.body.append(div);

div.innerHTML = 'Click me!';
div.href = 'https://google.com'
console.dir(div);
*/
// ========================================================================== //
/*
const div = document.createElement('div');
const link = document.createElement('a');

document.body.append(div);
div.append(link);

link.innerHTML = 'Click me!';
link.href = 'https://google.com';
console.dir(div);
*/

// Обращаемся к диву в ШТМЛ.

/*
document.body.children[0].append(link);
//document.body.children[0].children[0].children[0].append(link);

link.innerHTML = 'Click me!';
link.href = 'https://google.com';
*/
// ================ ================ ================ ================ //
/*
const div = document.createElement('root');
const link = document.createElement('a');

div.append(link);

link.innerHTML = 'Click me!';
link.href = 'https://google.com';
console.dir(div);
*/
// ================ ================ ================ ================ //
/*
const div = document.getElementsById('wrapper'); 
// Есть еще такие:
// const div = document.querySelector('wrapper');
// const div = document.querySelectorAll('wrapper');
// const div = document.querySelectorAll('.wrapper > div:first-child');

const link = document.createElement('a');

console.dir(div);

div[0].append(link);

link.innerHTML = 'Click me!';
link.href = 'https://google.com';

// ================ ================ ================ ================ //
*/
const div = document.getElementsByTagName('div'); 
const link = document.createElement('a');

console.dir(div);

div[0].append(link);

link.innerHTML = 'Click me!';
link.href = 'https://google.com';
// еще ест такие методы:
link.setAttribute('data-id');
link.getAttribute('data-id');
link.removeAttribute('data-id');
link.className = 'some class';

link.classList.add('some');
link.classList.toggle('some');

for(let i = 0; i < div.length ; i += 1) {
    img.src = 'https://www.google.com/search?q=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D1%83&tbm=isch&source=iu&ictx=1&fir=6FhVWLhHi76P-M%253A%252CJFJaTfL0feLwCM%252C_&vet=1&usg=AI4_-kSCIpJi-skA4Qjc-KxZ-AQbFFVaIQ&sa=X&ved=2ahUKEwiM67ztjqPiAhWs_CoKHStBAs0Q9QEwAHoECAcQBA#imgrc=6FhVWLhHi76P-M:';

    div[i].append(img); // append - в конец, есть еще prappend - в начало.
}