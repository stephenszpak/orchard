$(function() {
	setInterval(Tree, 3000);
});

function clearTime() {
	clearInterval(setTime);
};

var Tree = function() {
	this.branches = 0;
};

Tree.prototype.grow = function (amount) {
	this.branches += 1;
};

Tree.prototype.trim = function() {
	this.branches -= 1;
};

var Plant = function() {
	this.height = 0;
};
Plant.prototype = new Tree();

Plant.prototype.increaseHeight = function (growth) {

};

Plant.prototype.decreaseHeight = function() {

};

var Peartree = new Tree();


var Oaktree = new Tree();