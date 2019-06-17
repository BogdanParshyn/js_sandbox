'use strict'
function print(item){
	let result = '\n';
	var str1 = ' ';
	for(let i = 0; i < item - 1; i += 1){
		
		result += str1.repeat(i);
		result += '*';
		result += str1.repeat(item * 2 - i * 2 - 3);
		result+='*\n';
	}
	result += str1.repeat(item - 1);
	result += '*\n';
	return result;
}

function print2(item){
	let result = '\n';
	var str1 = ' ';
	result +=str1.repeat(item - 1);
	result+='*';
	result += str1.repeat(2 * (item - 1));
	result += '*\n';
	for(let i = 1; i < item - 1; i += 1){
		result += str1.repeat(item * 2 - i - 8);
		result += '*';
		result +=str1.repeat(i * 2 - 1);
		result += '*';
		result +=str1.repeat(item * 2 - i * 2 - 2);
		result += '*';
		result +=str1.repeat(i * 2 - 1);
		result += '*\n';
	}
	
	for(let i = 0; i < num - 1; i += 1){
		result += str1.repeat(i);
		result += '*';
		result += str1.repeat(item * 2 - i * 2 - 3);
		result += '*' + str1.repeat(i * 2) + '*';
		result += str1.repeat(item * 2 - i * 2 - 3);
		result += '*\n';
	}
	result += str1.repeat(item - 1);
	result += '*';
	result += str1.repeat(2 * (item - 1));
	result += '*\n';
	return console.log(result);
}

module.exports = {
	print,
	print2
};