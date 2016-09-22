Stack.prototype.isFull = function() {
  return this.values.length >= 10;
};

function SetOfStacks() {
  this.set = [new Stack()];
}

SetOfStacks.prototype.getLastStack = function() {
  return this.set[this.set.length - 1];
};

SetOfStacks.prototype.push = function(value) {
  var currentStack = this.getLastStack();

  if (currentStack.isFull()) {
    this.set.push(new Stack());
    currentStack = this.getLastStack();
  }
  currentStack.push(value);
};

SetOfStacks.prototype.pop = function(value) {
  var currentStack = this.getLastStack();
  var poppedvalue = currentStack.pop();

  if (!currentStack.values.length) {
    this.set.pop();
  }
  return poppedvalue;
};
