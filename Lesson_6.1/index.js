//console.log('foo-bar');

//const camelCase = require('camelcase');

import camelCase from 'camelcase';
import { resolveTxt } from 'dns';

console.log(camelCase('foo-bar'));

const iT = document.getElementByld('iT');
const readText = document.getElementByld('readText');

window.addEventListener('change', (event) => console.log('move', event));
iT.addEventListener('change', (event) =>{
    readText.innerHTML=camelCase(iT.value);
});

console.log('Получилось!')