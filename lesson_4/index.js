"use strict";
//Часть 1:
function makeImages() {
    for(let i = 0; i < arguments.length; i += 1) {
        const div = document.createElement('div');
        const img = document.createElement('img');

        document.body.append(div);
        div.append(img);
        img.src = arguments[i];
    }
}

makeImages('./img_1.png', './img_2.png', './img_3.png');
/*
var user = '[ "name", "Вася", "age", 35, "isAdmin", false, "friends", [0,1,2,3] ]';
console.log( 20, user ); // 1
user = JSON.parse(user);

console.log( 23, user ); // 1

console.log( user[3] ); // 1
*/
// ========================================================================================= //
//Часть 2:
class FormBuilder{
    constructor(form){
        this.form = form;
    }

	appendTo(target){
		this.form = form.createElement(this.target);
        form.append(this.target);
        return this;
    }
    
    addInput(name){
		input = form.createElement('input');
		this.form.append(input);
		input.style.type = 'text';
        input.style.name = this.name;
        return this;
    }

    addCheckbox(name){
		checkbox = form.createElement('Checkbox');
		this.form.append(checkbox);
        input.style.name = this.name;
        return this;
    }
    
    addButton(name){
		button = form.createElement('Button');
		this.form.append(button);
        input.style.name = this.name;
        return this;
    }
    
    destroy(){
        this.form.delete;
        return this;
	}
}
// ========================================================================================= //
//Часть 3:


// ========================================================================================= //
//Часть 4:
