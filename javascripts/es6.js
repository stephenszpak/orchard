//const !!!!!!!!!!!
const a = 8;
//console.log('a', a);
//a = 12;  //<--gives error; can only assign one thing; used mostly in math equations

//let -<-- just like var, lets use reassign the property !!!!!!!!!!!!!!! 
let b = 8;
//console.log('b', b);
b = 12
//console.log('b2', b);

function varTest() {
	var x = 1;
	if (true) {   
		var x = 2;   
		//console.log('inside if', x);
	}
	//console.log('outside if', x);  //both will log out to 2
}

function letTest() {
	let y = 1;
	if (true) {   
		let y = 2;   
		//console.log('inside if', y);
	}
	//console.log('outside if', y); 
}

varTest()
letTest()

//arrow functions  <----------------!!!!!!!!!!!!!!!!
var sum = function() {
	let a = 1, b = 2;
	return a + b;
};
//console.log('hardcoded sum in es5', sum());

var sum2 = () => {
	let a = 1, b = 2;
	return a + b;
};		// new way to write functions
// console.log("hardcoded in es6", sum2());

var reflect = function(value) {
	return value;
}
// console.log("reflect in es5", reflect('es5 is so yesterday'));

var reflect2 = (value) => {
	return value;
}
// console.log("reflect in es6", reflect2('es6 is the new hotness'));

var realSum = function(num1, num2) {
	return num1 + num2;
}
//console.log("realsum es5", realSum(2,3));

var realSum2 = (num1, num2) => {
	return num1 + num2;
}
//console.log("realsum es6", realSum2(4,6));

//string templates <--------------!!!!!!!!!!!!!
let m = "bite me";
// console.log("m", m);

let r = `hellow my name is ${m}`;
// console.log('r', r);

//property shorhand <------------!!!!!!!!!!!!!!!!!
//object literal property shorthand
let wow = "Hi there", es6 = "es6", numNum = () => {console.log('howdy')};

let myOldObject = {
	wow : wow,
	es6 : es6,
	numNum : numNum
}
// console.log("oldy", myOldObject);

let myNewObject = {
	wow, es6, numNum
};
// console.log("newy", myNewObject);


//method properties <-----------------!!!!!!!

var e5Obj = {
	foo: function(){console.log('foo')},
	bar: function(){console.log('foo')}
}
// console.log("e5Obj", e5Obj);

var es6Obj = {
	foo() {console.log('foo')},
	bar() {console.log('bar')}
}
// console.log("es6", es6Obj);












