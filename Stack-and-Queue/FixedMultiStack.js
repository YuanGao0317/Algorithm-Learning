function FixedMultiStack (stackSize){
	this.numberOfStacks = 3;
	this.stackCapacity = stackSize;
	this.values = new Array(stackSize * numberOfStacks);
	this.sizes = new Array(numberOfStacks);
}

FixedMultiStack.prototype.push = function(stackNum, value){
	if (this.isFull(stackNum)) throw Error("Stack is full.");
	
	this.sizes[stackNum]++;
	this.values[indexOfTop] = value;
};

FixedMultiStack.prototype.isFull = function(stackNum){
	return this.sizes[stackNum] == this.stackCapacity;
};

FixedMultiStack.prototype.indexOfTop = function(stackNum){
	var offset = stackNum * this.stackCapacity;
	var size = this.sizes[stackNum];
	return offset + size - 1;
};

FixedMultiStack.prototype.pop = function(stackNum){
	if (this.isEmpty) throw Error("Stack is empty.");
	var topIndex = indexOfTop(stackNum);
	var value = this.values[topIndex];
	this.values[topIndex] = 0;
	this.sizes[stackNum]--;
	return value;
};





