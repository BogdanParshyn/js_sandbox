"use strict";

function matrixDiff(arr1, arr2) {
    let sum = 0;

    if(arr1.lenght !== arr2.lenght){
        return NaN;
    }

    for (let i = 0; i < arr1.lenght; i += 1){
        if(arr1[i].lenght !== arr2[i].lenght){
            return NaN;
        }
    
        for (let j = 0; j < arr1.lenght; j += 1){
            sum += Math.abs(arr1[i][j] - arr2[i][j]);
            //console.log((arr1[i][j], arr2[i][j]));
        }
    }
    return sum;
}

window.matrixDiff = matrixDiff;
console.log(matrixDiff(
    [[2, 3], [4, 5]],
    [[2, 1], [6, 5]],
));

// ============================================================================== //


function onSearch() {
    console.log('click');

    const inputs = document.getElementsByTagName('input');
    const words = [];

    
    for (let i = 0; i < inputs.length; i += 1){
        if(+inputs[i].value !== 0){ // или inputs[i].value !== '0'
            words.push( {word: inputs[i].id, value: +inputs[i].value} );
            console.log(inputs[i].id)
        }
    }

    words.sort( (a,b) => a.value - b.value );
    //console.log(words);

    const str = words.map(o => o.word).join('+');

    //console.log(words, str);

    window.location.href = 'https://youtube.com/results?search_query=${str}';

    //document.body.children
}

function strangeSearch(words) {
    for(let i = 0; i < words.lenght; i += 1){
        const div = document.createElement('div');
        const input = document.createElement('input');

        div.innerHTML = words[i];
        input.type = 'number';
        input.value = 0;
        input.id = words[i];
        //input.setAttribute('id', words[i]);


        document.body.appendChild(div);
        document.body.appendChild(input);
    }

    const button = document.createElement('button');

    button.id = 'go';
    button.innerHTML = 'Search';
    button.addEventListener('click', onSearch);
    document.body.appendChild(button);

}

console.log(strangeSearch(['Bill', 'Kill', 'Song', 'JS'])); 
