"use strict";

//1-e
function print (num) {
    let result = '\n';

    for (let i = 0; i < num - 1; i += 1) {
        result += ' '.repeat(i);
        result += '*';
        result += ' '.repeat(num * 2 - i * 2 - 3);
        result += '*\n';

    }

    result += ' '.repeat(num);
    result += '*\n';

    return result;
}

//2-e берем первое и немного меняем логику.

//3-e

function getArgValue(name) {
    while (true) {
        const answer = parseFloat(prompt('Enter argument value for ${name}'));

        if (answer === 'exit') {
            return false;
        }

        if (!isNaN(answer)) {
            return answer;
        }
    }
}


function calculate () {
    const result = {
        history: [],
        formula: '',
        args: {},
    };

    
    
    const answer = prompt('Which formula');

    if (answer === '1') {
        result.formula = 'y = kx + b';
        result.args = {};
        const args = result.args;
        const k = getArgValue('k', result.history);
        if(k === false) {
            return result;
        } else {
            result.args.k = k;
        }
        const x = getArgValue('x', result.history);
        if(x === false) {
            return result;
        } else {
            result.args.x = x;
        }
        const b = getArgValue('b', result.history);
        if(b === false) {
            return result;
        } else {
            result.args.b = b;
        }
        break;


    }

    if (answer === '2') {
        result.formula = 'y = x ^ 2';
        break;
    }

    while (true) {
        const answer = parseFloat(prompt('Enter argument value for x'));
        const number = parseFloat(answer);

        if (answer === 'exit') {
            return result;
        }

        if (!isNaN(answer)) {
            result.args.x = answer;
        }
    }

    return result;
    
}
