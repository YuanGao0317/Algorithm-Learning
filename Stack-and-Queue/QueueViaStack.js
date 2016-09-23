function QueueViaStack() {
	this.stackNewest = new Stack();
	this.stackOldest = new Stack();
}

QueueViaStack.prototype.size = function(){
	return this.stackNewest.size() + this.stackOldest.size();
};

QueueViaStack.prototype.add = function(value){
	this.stackNewest.push(value);
};

QueueViaStack.prototype.shiftStacks = function() {
	if (this.stackOldest.isEmpty()) {
		while (!this.stackNewest.isEmpty()) {
			this.stackOldest.push(this.stackNewest.pop());
		}
	}
};

QueueViaStack.prototype.peak = function() {
	this.shiftStacks();
	return stackOldest.peek();
};

QueueViaStack.prototype.remove = function() {
	this.shiftStacks();
	return stackOldest.pop();
};
