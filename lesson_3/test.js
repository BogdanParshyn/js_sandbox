"use strict";

class Point{
	constructor(x, y){
		this.x = x;
		this.y = y;
    }
    
	toString(){
	    return `Point[${this.x} ${this.y}]`;
    }
    
	set(x, y){
		this.x = x;
		this.y = y;
    }
    
	getX(){
		return this.x;
    }
    
	getY(){
		return this.y;
	}
}

class Line{
	constructor(point1, point2){
		this.point1 = point1;
		this.point2 = point2;
    }
    
	toString(){
		return `Line(${this.point1} - ${this.point2})`;
    }
    
	length(){
        return Math.sqrt(
            Math.pow((this.point2.x - this.point1.x), 2) 
            + 
            Math.pow((this.point2.y - this.point1.y), 2)
        )
	}
}

class WeightedPoint extends Point{
	constructor(x, y, weight){
		super(x, y);
        this.weight = weight;

	}
	toString(){
		return `${this.weight}&${super.toString()}`;
    }
   
	set(x, y, weight){
		this.x = x;
		this.y = y;
		this.weight = weight;
    }

	getWeight(){
		return this.weight;
	}
}

const p1 = new Point(2, 3.4);
const p2 = new WeightedPoint(-1, 0.5, 3);
const line = new Line(p1, p2);
console.log(line.toString()); // "Line(Point[2 3.4] - 3&Point[-1 0.5])"
console.log(line.length()); // 4.172529209005013
