$(function() {
	setInterval(Tree, 3000);
});

function clearTime() {
	clearInterval(setTime);
};

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

Plant.prototype.increaseHeight = function (growth) {
	this.height += growth;
};

Plant.prototype.decreaseHeight = function(growth) {  //<---decreaseHeight is the name of the function
	this.height -= growth
};

let Peartree = new Tree();


let Oaktree = new Tree();


console.log("pear", Peartree);





