function main() {
    console.log('Hello');  
    ['a', 'b', 'c'].forEach( (el) => {
        console.log(el);
        console.log(el);
    });
}

function main(){
    console.log('Hello');
}

function secondary(){
    console.log('secondary');
}

module.exports = main;

const some = require('./module');

some.main();
some.secondary();

