"use strict";
//Часть 1:
function removeKeys(obj, arr){
    
    for(var i = 0; i < arr.length; i++) {
        var el = arr[i]; // el это повторяющийся ключ объекта в массиве, который мы потом удаляем.
        if(el in obj) {
            delete obj[el];
        }
    }
    return obj;
} 
// ========================================================================================= //
//Часть 2:
function clearNumbers(arr){

    for(var i = arr.length - 1; i >= 0; i -= 1) {
        
        for(var j = arr[i].length - 1; j >= 0; j -= 1) {
        
            typeof arr[i][j] !== 'number' ? arr[i].splice(j, 1) : arr;
        }

        arr[i].length == 0 ? arr.splice(i, 1) : arr; 
    }
    return arr;
}
// ========================================================================================= //
//Часть 3:
function reverse() {
    var arr = [];
    
    for(var i = 0; i < arguments.length; i += 1){

        arr[i] = arguments[i];
        arr[i] = arr[i].split("").reverse().join("");
    }
    return arr.reverse();
}

// ========================================================================================= //
//Часть 4:
function join(...arg) {
    
    for(var i = arg.length - 1; i >= 0; i -= 1) {
        
        typeof arg[i] == 'object' ? arg : arg.splice(i, 1); 
    }
    
    for(var i = 1; i < arr.length; i++) {
        var el = arg[i];
        for(var j = 0; i < arr[j].length; i++) { 
            if(el[j] in arg[0]) {
                arsss = arg[0]
            }

        }
    return arg;
    }
}
// НЕ УСПЕЛ ДОДЕЛАТЬ.