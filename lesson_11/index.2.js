"use strict";

function timeout(delay) {
    return new Promise( (resolve) => {
        setTimeout(resolve, delay);
    });
}

timeout(1000).then(() => console.log('1'));
console.log('2');






function timeout(delay, arg) {
    return new Promise( (resolve) => {
        setTimeout(() => resolve(arg), delay);
    });
}

    .then(() => console.log(result));
console.log('2');