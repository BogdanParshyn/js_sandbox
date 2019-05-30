function mask(str) {
    let result = '';

    for (let i = 0; i < str.length; i += 1) {
        if (i < str.length - 4) {
            result +='*';
        } else {
            result += str[i];
        }
    }

    return result;
}

function func4(arr) {
    let max = - Infinity;

    for (let i = 0; i < arr.length; i += 1) {
        for (let k = 1; i < arr.length - i; k += 1) {
            let sum = 0;

            for (let j = 0; j <= k; j += 1) {
                sum += arr[i + j];
            }

            if (sum > max) {
                max = sum;
            }
        }
    }

    return max;
}

//

function add(arr, result) {
    for (let i = 0; i < arr.length; i += 1) {
        if (Array.isArray(arr[i])) {
            add(arr[i], result);
        } else {
            result.push(arr[i]);
        }
    }
}

function func5(arr) {
    const result = [];

    add(arr, result);

    return result;
}

//

function main() {
    console.log('Hello');   
}