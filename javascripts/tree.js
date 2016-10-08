"use strict";

let interval = null;
let counter = 0;

const outputDiv = $("#output");
// console.log("main", outputDiv);

function Tree() {
	this.branches = 0;
};
Tree.prototype = new Plant();

Tree.prototype.grow = function (amount) {
	this.increaseHeight(amount);
};

Tree.prototype.trim = function(amount) {
	this.decreaseHeight(amount);
	this.branches -= 1;
};

function Plant() {
	this.height = 0;
};


Plant.prototype.increaseHeight = function(growth) {
	for (let i = 0; i < growth; i++) {
		this.height += 1;
		if (this.height % 10 === 0) {
			this.branches++
		};
	};
};

Plant.prototype.decreaseHeight = function(growth) {  //<---decreaseHeight is the name of the function
	this.height -= growth
};

let PearTree = new Tree();
let OakTree = new Tree();


// console.log("pear", PearTree);


interval = setInterval(function(){
	PearTree.grow(2);
	OakTree.grow(3);

	let output = `<p> counter ${counter}</p>`;
		output += `<p>Pear tree is now ${PearTree.height} ft tall and has ${PearTree.branches} branches</p>`;
		output += `<p>Oak tree is now ${OakTree.height} ft tall and has ${OakTree.branches} branches</p>`;
	outputDiv.append(output);


	console.log("counter", counter);
	if (counter % 10 === 0) {
		PearTree.trim(1);
		OakTree.trim(2);
	};
	if (counter > 30) {
		clearInterval(interval);
		console.log("finished");
	};
	counter++;
	}, 1000);


