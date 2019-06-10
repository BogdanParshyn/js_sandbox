"use strict";

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

