"use strict";

/*
Promise.race([
    timeout(5000, 1),
    failt(1000, 3),
    timeout(-1000, 1),
    timeout(0, 1),
])

    .then(result => console.log(result))
    .catch(err => console.warn(err));
*/
// =====

const pr1 = timeout(5000, 1);
const pr2 = timeout(-1000, 1);
const pr3 = timeout(120, 1); 

Promise.race([
    pr1, pr2, pr3,
])

.then(result => console.log(result))
.catch(err => console.warn(err));

// ==========================================

const pr1 = timeout(5000, 1);
const pr2 = timeout(-1000, 1);
const pr3 = timeout(120, 1); 

Promise.race( (are) )

.then(result => console.log(result))
.catch(err => console.warn(err));